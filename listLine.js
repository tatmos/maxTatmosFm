inlets = 1;
outlets = 1;
size = 18;

var tsk = new Task(mytask, this);
   tsk.interval = 2; // set the initial task interval

var data = new Array();
for(var i=0;i<size;i++)
	{
		data.push(0.0);
	}
	
function list()
{
	for(var i=0;i<arguments.length;i++)
	{
		data[i] = arguments[i];// + 0.1*(Math.floor( Math.random() * 5 ) + 0 ;
	}
   tsk.repeat();
	outlet(0, data);
}

function mytask()
{
	for(var i=0;i<size;i++)
	{
		if(i == 1 || i == 7 || i == 13)
		{
			//	attack
			data[i] = data[i]*0.999 + 0.001*(Math.floor( Math.random() * data[i] ) - 1) ;
			if(data[i] < -2 || data[i] > 2)
			{
			   data[i] = Math.random() * 2;
			}
		} else 
		if(i == 2 || i == 8 || i == 14)
		{
			//	attack
			data[i] = data[i]*0.999 + 0.001*(Math.floor( Math.random() * data[i] ) - 1) ;
			if(data[i] < 0 || data[i] > 200)
			{
			   data[i] = Math.random() * 100;
			}
		} else 
		if(i == 3 || i == 9 || i == 15)
		{
			//	decay
			data[i] = data[i]*0.999 + 0.001*(Math.floor( Math.random() * data[i] ) - 1) ;
			if(data[i] < 0 || data[i] > 500)
			{
			   data[i] = Math.random() * 200;
			}
		}else 
		if(i == 5 || i == 11 || i == 17)
		{
			//	decay
			data[i] = data[i]*0.999 + 0.001*(Math.floor( Math.random() * data[i] ) - 1) ;
			if(data[i] < 0 || data[i] > 500)
			{
			   data[i] = Math.random() * 200;
			}
		} else 
		if(i == 4 || i == 10 || i == 16)
		{
			//	sustain
			data[i] = 0.7;
		} else 
		{
			data[i] = data[i]*0.999 + 0.001*(Math.floor( Math.random() * data[i] ) - 1) ;
		}
	}
	outlet(0, data);
}