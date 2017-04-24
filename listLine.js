inlets = 1;
outlets = 1;
size = 18;
var numStability = 1;
var numInterval = 2000;

var tsk = new Task(mytask, this);
   tsk.interval = numInterval; // set the initial task interval

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

function stability(a)
{
	numStability = a;
}

function interval(a)
{
	numInterval = a;
	tsk.interval = numInterval;
}


function mytask()
{
	if(numStability == 1)return;
	
	for(var i=0;i<size;i++)
	{
		if(i%6 == 0)
		{
			//	ratio
			data[i] = data[i]*numStability + (1-numStability)*(Math.floor( Math.random() * (1-numStability*0.01) ) - 0) ;
			if(data[i] < 0 || data[i] > 31)
			{
			   data[i] = Math.random() * 31;
			}
		} else 
		if(i%6 == 1)
		{
			//	amp
			data[i] = data[i]*numStability + (1-numStability)*(Math.floor( Math.random() * (1-numStability*0.01) ) - 0) ;
			if(data[i] < 0.5 || data[i] > 2)
			{
			   data[i] = Math.random() * 2;
			}
		} else 
		if(i%6 == 2)
		{
			//	attack
			data[i] = data[i]*numStability + (1-numStability)*(Math.floor( Math.random() * (1-numStability*10.0) ) - 0) ;
			if(data[i] < 0 || data[i] > 5000)
			{
			   data[i] = Math.random() * 5000;
			}
		} else 
		if(i%6 == 3)
		{
			//	decay
			data[i] = data[i]*numStability + (1-numStability)*(Math.floor( Math.random() * (1-numStability*20.0) ) - 0) ;
			if(data[i] < 0 || data[i] > 1000)
			{
			   data[i] = Math.random() * 1000;
			}
		} else 
		if(i%6 == 4)
		{
			//	sustain
			data[i] = data[i]*numStability + (1-numStability)*(Math.floor( Math.random() * (1-numStability*0.01) ) - numStability*1.0) ;
			if(data[i] < 0 || data[i] > 1)
			{
			   data[i] = Math.random() * 1;
			}
			data[i] = 1;
		} else
		if(i%6 == 5)
		{
			//	release
			data[i] = data[i]*numStability + (1-numStability)*(Math.floor( Math.random() * (1-numStability*10.0) ) - 0) ;
			if(data[i] < 0 || data[i] > 2000)
			{
			   data[i] = Math.random() * 2000;
			}
		}
	}
	outlet(0, data);
}