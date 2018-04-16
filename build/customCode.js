"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = "\nvar player = world.players[playerNum-1];\nvar closestGem = false;\nvar closest;\nworld.stones.forEach(stone => {\n\tif(closestGem===false)\n\t\tclosestGem = stone;\n\telse if(\n\t\tMath.abs(Math.sqrt(closestGem.x*closestGem.x+closestGem.y*closestGem.y)-Math.sqrt(player.x*player.x+player.y*player.y))>\n\t\tMath.abs(Math.sqrt(stone.x*stone.x+stone.y*stone.y)-Math.sqrt(player.x*player.x+player.y*player.y))\n\t){\n\t\tclosestGem = stone;\n\t}\n});\nif(closestGem){\n\tif(closestGem.x-player.x>10){\n\t\tvar direction = {left:false, right:true, up:false, down:false};\n\t}   \n\telse if(closestGem.x-player.x<-10){\n\t\tvar direction = {left:true, right:false, up:false, down:false};\n\t}\n\telse if(closestGem.y-player.y>10){\n\t\tvar direction = {left:false, right:false, up:false, down:true};\n\t}\n\telse if(closestGem.y-player.y<-10){\n\t\tvar direction = {left:false, right:false, up:true, down:false};\n\t}\n\treturn direction;\n}\n";