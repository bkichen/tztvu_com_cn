
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (FestivalHelperDWR == null) var FestivalHelperDWR = {};
FestivalHelperDWR._path = '/system/dwr';
FestivalHelperDWR.getFloat = function(p0, p1, p2, callback) {
  dwr.engine._execute(FestivalHelperDWR._path, 'FestivalHelperDWR', 'getFloat', p0, p1, p2, callback);
}
FestivalHelperDWR.getPop = function(p0, p1, p2, callback) {
  dwr.engine._execute(FestivalHelperDWR._path, 'FestivalHelperDWR', 'getPop', p0, p1, p2, callback);
}
FestivalHelperDWR.getSys = function(p0, callback) {
  dwr.engine._execute(FestivalHelperDWR._path, 'FestivalHelperDWR', 'getSys', p0, callback);
}
FestivalHelperDWR.getCouplet = function(p0, p1, p2, callback) {
  dwr.engine._execute(FestivalHelperDWR._path, 'FestivalHelperDWR', 'getCouplet', p0, p1, p2, callback);
}
