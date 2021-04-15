//zhangjian 2004-10-18
//This Code is for element flying
//usually for advertisement

function ElementFly()
{
	this.ID = "";
	this.ElementID = "";
	this.Delay = 30;
	this.X = 0;
	this.Y = 0;
	this.XStep = 1;
	this.YStep = 1;
	this.Pause = false;	

	var XOver = false;
	var YOver = false;
	var WinHeight = document.body.clientHeight;
	var WinWidth = document.body.clientWidth;
	var ElementOffsetHeight = 0; 
	var ElementOffsetWidth = 0; 
	
	this.ChangePos = function ChangePos()
	{
		WinHeight = document.body.clientHeight;
	    WinWidth = document.body.clientWidth;
		ElementOffsetHeight = document.all[this.ElementID].offsetHeight; 
		ElementOffsetWidth = document.all[this.ElementID].offsetWidth;
		
		if( this.Pause ) clearInterval(interval);
		
		if (XOver) 
		{
			this.X = this.X - this.XStep;
		}
		else 
		{
			this.X = this.X + this.XStep;
		}
		
		if (this.X < 0) 
		{
			XOver = false;
			this.X = 0;
		}
		if (this.X >= (WinWidth - ElementOffsetWidth)) 
		{
			XOver = true;
			this.X = (WinWidth - ElementOffsetWidth);
		}
		
		
		if (YOver) 
		{
			this.Y = this.Y - this.YStep;
		}
		else 
		{
			this.Y = this.Y + this.YStep;
		}
		
		if (this.Y < 0) 
		{
			YOver = false;
			this.Y = 0;
		}
		if (this.Y >= (WinHeight - ElementOffsetHeight)) 
		{
			YOver = true;
			this.Y = (WinHeight - ElementOffsetHeight);
		}
		document.all[this.ElementID].style.pixelLeft = this.X + document.body.scrollLeft;
		document.all[this.ElementID].style.pixelTop = this.Y + document.body.scrollLeft;
	}
	
	this.Move = function Move()
	{
		document.all[this.ElementID].style.position = "absolute";
		ElementOffsetHeight = document.all[this.ElementID].offsetHeight; 
		ElementOffsetWidth = document.all[this.ElementID].offsetWidth;
		if ( !this.Pause ) interval = setInterval(this.ID + '.ChangePos()',this.Delay);
	}

}










