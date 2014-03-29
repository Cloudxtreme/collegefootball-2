<!DOCTYPE html>
<html>
<body>

<script>
//This sets up all of the relevent variables.

var offensiveline = new Array();
offensiveline[0] = [50,50,50,50,50];
offensiveline[1] = [50,50,50,50,50];
offensiveline[2] = [50,50,50,50,50];
offensiveline[3] = [50,50,50,50,50];
offensiveline[4] = [50,50,50,50,50];

var receivers = new Array();
receivers[0] = [50,50,50,50,50];
receivers[1] = [50,50,50,50,50];
receivers[2] = [50,50,50,50,50];

var backs = new Array();
backs[0] = [50,50,50,50,50];

var tightends = new Array();
tightends[0] = [50,50,50,50,50];

var qb = new Array();
qb[0] = [50,50,50,50,50];

var defensiveline = new Array();
defensiveline[0] = [50,50,50,50,50];
defensiveline[1] = [50,50,50,50,50];
defensiveline[2] = [50,50,50,50,50];
defensiveline[3] = [50,50,50,50,50];

var linebackers = new Array();
linebackers[0] = [50,50,50,50,50];
linebackers[1] = [50,50,50,50,50];
linebackers[2] = [50,50,50,50,50];

var defensivebacks = new Array();
defensivebacks[0] = [50,50,50,50,50];
defensivebacks[1] = [50,50,50,50,50];
defensivebacks[2] = [50,50,50,50,50];
defensivebacks[3] = [50,50,50,50,50];

var offplayer = new Array();
offplayer[0] = [0,offensiveline[0]];
offplayer[1] = [0,offensiveline[1]];
offplayer[2] = [0,offensiveline[2]];
offplayer[3] = [0,offensiveline[3]];
offplayer[4] = [0,offensiveline[4]];
offplayer[5] = [1,qb[0]];
offplayer[6] = [2,receivers[0]];
offplayer[7] = [2,receivers[1]];
offplayer[8] = [2,receivers[2]];
offplayer[9] = [3,backs[0]];
offplayer[10] = [4,tightends[0]];

var defplayer = new Array();
defplayer[0] = [0,defensiveline[0]];
defplayer[1] = [0,defensiveline[1]];
defplayer[2] = [0,defensiveline[2]];
defplayer[3] = [0,defensiveline[3]];
defplayer[4] = [1,linebackers[0]];
defplayer[5] = [1,linebackers[1]];
defplayer[6] = [1,linebackers[2]];
defplayer[7] = [2,defensivebacks[0]];
defplayer[8] = [2,defensivebacks[1]];
defplayer[9] = [2,defensivebacks[2]];
defplayer[10] = [2,defensivebacks[3]];

var stoprun = .5; //This is the defense's setting to stop the run
var stoppass = 1-stoprun; //This is the defense's setting to stop the pass
var isplayaction = 1; //This is 1 if the play is play-action, 0 if not
var blitzers = [5]; //This is the defensive id of any blitzers.

</script>

<script>
//This determines the amount of pressure a defensive player places on the QB at a given time.
var pressure = new Array();
var openness = new Array();
var sacklimit;
var preslimit;
function time(defplayerid,snaptime)
{
var offplayerid = defplayerid;
var presfactor = 60;
var presrand = .25;
sacklimit = 3;
preslimit = 2.5;
var press = snaptime*Math.pow(2,(((defplayer[defplayerid][1][0]-offplayer[offplayerid][1][0])+(Math.random()-.5)*Math.pow(2,-(defplayer[defplayerid][1][3]-offplayer[offplayerid][1][3])*presrand))/presfactor));

return press;
}
alert('do it');
var sumtime = 0;
var ntime = 0;
for (var ii=0;ii<100;ii++)
{
defensiveline[0] = [75,50,50,50,50];
defplayer[0] = [0,defensiveline[0]];
for (var i=0;i<150;i++)
{
pres = time(0,i/10.);
if (pres>preslimit)
{
sumtime = sumtime+i/10;
ntime = ntime+1;
break;
}
}
}
alert(sumtime/ntime);

alert('did it');
//This determines how open a particular receiver is at a given time.

</script>


</body>
</html>
