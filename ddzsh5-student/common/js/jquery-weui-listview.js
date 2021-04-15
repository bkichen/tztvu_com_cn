/** JavaScript Document
 *  description: 基于weui封装的listview组件，实现滚动加载。
 *  author: zengxiangkai
 *  create date: 2018-12-18
 *  modify log:
 */
;
(function ($, window, document, undefined) {
    'use strict';

    //默认初始跳过的数据条数
    var DEF_SKIP = 0;
    //默认每次加载数据量
    var DEF_LIMIT = 20;

    //创建工具类对象
    var ListView = function (ele, opt) {

        //jquery对象
        this.$element = ele;

        // 默认参数
        this.defaults = {
            loadingText: '正在加载',
            noDataText: '暂无数据',
            noMoreDataText: '没有更多数据了',
            dataSource: null, //数据源
            template: function () { /**/ }, //列表项渲染模板
            onClick: undefined // 列表项单击事件
        };

        //扩展参数
        this.options = $.extend({}, this.defaults, opt);
    };

    ListView.prototype = {

        /**
         * 初始化
         */
        init: function (params) {

            var $obj = this.$element;

            if ($obj == null || typeof $obj === "undefined" || $obj.length == 0) {
                return;
            }
            this.skip = DEF_SKIP;
            this.limit = DEF_LIMIT;

            if (params) {
                this.options = $.extend({}, this.options, params);
            }

            this.loadData();

            return this.$element;
        },

        /**
         * 解析 listItem HTML模板
         *
         * @param {function} fn
         * @returns
         */
        compile: function (fn) {

            return function (itemData) {

                var reCommentContents = /\/\*([\s\S]*?)\*\//;

                // 如果参数不是function则抛出异常
                if (typeof fn !== 'function') {
                    throw new TypeError('Expected a function');
                }

                // 根据正则表达式获取函数fn内注释的内容
                var match = reCommentContents.exec(fn.toString());

                if (!match) {
                    throw new TypeError('Multiline comment missing.');
                }

                // 将模板中的参数 ${} 解析成itemData对应的值
                return match[1].replace(/\$\{\w.+?\}/g, function (param) {

                    var value = itemData;

                    // 拿到参数名，例：data.item.name
                    param = param.replace('${', '').replace('}', '');

                    // 分割字符串，逐步拿到对应key的值
                    param.split('.').forEach(function (section) {
                        value = value[section];
                    });

                    return value;

                });
            }
        },

        /**
         * 获取数据源数据
         */
        loadData: function () {

            var skip = this.skip;
            var limit = this.limit;
            var dataSource = this.options.dataSource;

            if (dataSource == null || typeof dataSource === "undefined") {
                return;
            } else {

                if (typeof dataSource['pageSize'] !== "undefined") {
                    this.limit = Number(dataSource['pageSize']);
                } else {
                    dataSource['pageSize'] = limit;
                }
            }

            $.extend(dataSource.data, {
                skip: skip,
                limit: this.limit
            });

            // 获取数据
            var request = $.ajax(dataSource);

            // 渲染数据
            return this.render(request, dataSource['onSuccess']);

        },

        /**
         * 渲染数据到页面
         * 
         * @param {Deferred} request 
         * @param {function} success  //请求成功回调
         */
        render: function (request, onSuccess) {

            var $this = this;
            var template = this.options.template;
            var loadingText = this.options.loadingText;
            var noDataText = this.options.noDataText;
            var noMoreDataText = this.options.noMoreDataText;
            var onClick = this.options.onClick;
            var htmlTemplate = this.compile(template);

            return request.then(function (data) {

                var list = JSON.parse(data);

                if (onSuccess instanceof Function) {
                    list = onSuccess(data);
                }

                if (list instanceof Array) {

                    if (list.length > 0) {

                        $this.$element.find('.weui-loadmore_line').remove();

                        for (var index in list) {

                            var itemData = list[index];

                            // 将数据填充到模板上，并渲染到页面
                            var item = htmlTemplate(itemData);
                            htmlTemplate(list[index]);
                            var $item = $(item.trim());
                            $this.$element.append($item);

                            var uuid = guid();
                            $item.attr("id", uuid);
                            $item.data("data", itemData);

                            if (onClick instanceof Function) {
                                $(document).delegate("#" + uuid, "click", function () {
                                    onClick($(this).data('data') || {});
                                });
                            }
                        }

                        //加载数据后，页面的长度是否超出屏幕高度，产生了滚动条，如果有滚动条
                        if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)) {

                            var loadmore = '<div class="weui-loadmore">' +
                                '<i class="weui-loading"></i>' +
                                '<span class="weui-loadmore__tips">' + loadingText + '</span>' +
                                '</div>';
                            $this.$element.next('.weui-loadmore').remove();
                            $this.$element.after(loadmore);
                        }

                        $this.skip = $this.skip + list.length;

                    } else {

                        if ($this.skip == 0) {

                            $this.$element.empty();
                            var nomoredata = '<div class="weui-loadmore weui-loadmore_line">' +
                                '<span class="weui-loadmore__tips">' + noDataText + '</span>' +
                                '</div>';
                            $this.$element.append(nomoredata);

                        } else {

                            $this.$element.next('.weui-loadmore').remove();
                            $.toast(noMoreDataText, "text");

                        }

                        return null;
                    }

                } else {
                    throw new TypeError('Expected a Array');
                }

                return list;
            });

        }

    };

    /**
     * 生成uuid
     */
    var guid = function () {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    /** 
     * 初始化列表
     */
    $.fn.listView = function (options) {

        return this.each(function () {

            if (!this) return;
            var $this = $(this);
            var self = this;

            var listView = $this.data("ListView");

            $this.empty();
            $this.next('.weui-loadmore').remove();

            // 如果没有实例，则创建
            if (!listView) {

                self.loading = false;

                listView = new ListView($this, options);
                listView.init();

                // 存储该实例，防止重复添加滚动监听
                $this.data("ListView", listView);

                $(document.body).destroyInfinite();
                //滚动到底部时触发加载数据事件
                $(document.body).infinite().on("infinite", function () {
                    if (self.loading || self.loadFinish) return;
                    self.loading = true;
                    listView.loadData().done(function (data) {

                        self.loading = false;
                        if (data == null || data.length <= 0) {
                            self.loadFinish = true;
                        }

                        return data;
                    });
                });

            } else {

                // 如果已经创建过实例了，则重置参数
                self.loadFinish = false;
                listView.init(options);
                $this.data("ListView", listView);
            }

        });

    };

})(jQuery, window, document);