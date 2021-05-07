module.exports = function Pillars(mod) {

const path = require('path');
mod.dispatch.addDefinition('C_CONTACT_WORKOBJECT', 1, path.join(__dirname, 'C_CONTACT_WORKOBJECT.1.def'));
let enabled = false
let cid	
let pillar_1 = 303405
let pillar_2 = 303406
let pillar_3 = 303407
let pillar_4 = 303408
let pillar_5 = 303409
let packet_1 = null
let packet_2 = null
let packet_3 = null
let packet_4 = null
let packet_5 = null
let packet_loc
let p1 = false
let p2 = false
let p3 = false
let p4 = false
let p5 = false
let del1_1 = null
let del1_2 = null
let del2_1 = null
let del2_2 = null
let del3_1 = null
let del3_2 = null
let del4_1 = null
let del4_2 = null
let del5_1 = null
let del5_2 = null
let del1_1_timeout = null
let del1_2_timeout = null
let del2_1_timeout = null
let del2_2_timeout = null
let del3_1_timeout = null
let del3_2_timeout = null
let del4_1_timeout = null
let del4_2_timeout = null
let del5_1_timeout = null
let del5_2_timeout = null


	mod.command.add("pillar", (arg) => {
		enabled = !enabled
		mod.command.message("Pillars: " + enabled);
	})
	mod.command.add("setpillar", (arg) => {
		if(arg) {
			switch (arg) {
				case "1":
				p1 = !p1
				mod.command.message("Pillar 1 set to: " + p1)
				break
				case "2":
				p2 = !p2
				mod.command.message("Pillar 2 set to: " + p2)
				break
				case "3":
				p3 = !p3
				mod.command.message("Pillar 3 set to: " + p3)
				break
				case "4":
				p4 = !p4
				mod.command.message("Pillar 4 set to: " + p4)
				break
				case "5":
				p5 = !p5
				mod.command.message("Pillar 5 set to: " + p5)
				break				
			}
			
		} else {
			mod.command.message("Set a value from 1 to 5")
		}
	})
	mod.hook('S_LOAD_TOPO', 3, event => {
		clearTimeout(del1_1_timeout)
		clearTimeout(del1_2_timeout)
		clearTimeout(del2_1_timeout)
		clearTimeout(del2_2_timeout)
		clearTimeout(del3_1_timeout)
		clearTimeout(del3_2_timeout)
		clearTimeout(del4_1_timeout)
		clearTimeout(del4_2_timeout)
		clearTimeout(del5_1_timeout)
		clearTimeout(del5_2_timeout)
		del1_1 = null
		del1_2 = null
		del2_1 = null
		del2_2 = null
		del3_1 = null
		del3_2 = null
		del4_1 = null
		del4_2 = null
		del5_1 = null
		del5_2 = null
		del1_1_timeout = null
		del1_2_timeout = null
		del2_1_timeout = null		
		del2_2_timeout = null
		del3_1_timeout = null
		del3_2_timeout = null
		del4_1_timeout = null
		del4_2_timeout = null
		del5_1_timeout = null
		del5_2_timeout = null	
	})	
	mod.hook('C_PLAYER_LOCATION', 5, event => {	
		packet_loc = event
	})	

	
	mod.hook('S_SPAWN_WORKOBJECT', 3, event => {
				if(!enabled) return;
				setDelay()				
				
				if(event.id==pillar_1 && p1) {
						
			        del1_1_timeout = setTimeout(function () {
					mod.send('S_INSTANT_MOVE', 3, {
						gameId: cid,
						loc: event.loc,
						w: packet_loc.w
					})
					}, del1_1)
					del1_2_timeout = setTimeout(function () {
						mod.send('C_CONTACT_WORKOBJECT', 1, {
							gameId: event.gameId
							
						})				
					}, del1_2)				
				}
				if(event.id==pillar_2 && p2) {
					
					del2_1_timeout = setTimeout(function () {
					mod.send('S_INSTANT_MOVE', 3, {
						gameId: cid,
						loc: event.loc,
						w: packet_loc.w
					})
					}, del2_1)
					
					del2_2_timeout = setTimeout(function () {
						mod.send('C_CONTACT_WORKOBJECT', 1, {
							gameId: event.gameId
							
						})				
					}, del2_2)					
				}
				if(event.id==pillar_3 && p3) {

					del3_1_timeout = setTimeout(function () {
						mod.send('S_INSTANT_MOVE', 3, {
							gameId: cid,
							loc: event.loc,
							w: packet_loc.w
						})
					}, del3_1)					
					del3_2_timeout = setTimeout(function () {
						mod.send('C_CONTACT_WORKOBJECT', 1, {
							gameId: event.gameId
							
						})				
					}, del3_2)	
				}
				if(event.id==pillar_4 && p4) {

					del4_1_timeout = setTimeout(function () {
						mod.send('S_INSTANT_MOVE', 3, {
							gameId: cid,
							loc: event.loc,
							w: packet_loc.w
						})
					}, del4_1)					
					del4_2_timeout = setTimeout(function () {
						mod.send('C_CONTACT_WORKOBJECT', 1, {
							gameId: event.gameId
							
						})				
					}, del4_2)	
				}
				if(event.id==pillar_5 && p5) {

					del5_1_timeout = setTimeout(function () {
						mod.send('S_INSTANT_MOVE', 3, {
							gameId: cid,
							loc: event.loc,
							w: packet_loc.w
						})
					}, del5_1)					
					del5_2_timeout = setTimeout(function () {
						mod.send('C_CONTACT_WORKOBJECT', 1, {
							gameId: event.gameId
							
						})				
					}, del5_2)	
				}			
	})

	function setDelay() {
					if(p1) {
							del1_1 = 0
							del1_2 = 200
					}
					if(p1 && p2) {
							del2_1 = 2000
							del2_2 = 2200
					}
					if(!p1 && p2) {				
							del2_1 = 0
							del2_2 = 200
					}
					if(p1 && p2 && p3) {					
							del3_1 = 4000
							del3_2 = 4200
					}
					if((p1 && !p2 && p3) || 
						(!p1 && p2 && p3)) {
							del3_1 = 2000
							del3_2 = 2200
					}
					if(!p1 && !p2 && p3) {
							del3_1 = 0
							del3_2 = 200
					}
					if(p1 && p2 && p3 && p4) {
							del4_1 = 6000
							del4_2 = 6200
					}
					if((!p1 && p2 && p3 && p4) ||
						(p1 && !p2 && p3 && p4) ||
						(p1 && p2 && !p3 && p4)) {
							del4_1 = 4000
							del4_2 = 4200
					}
					if((!p1 && !p2 && p3 && p4) ||
						(p1 && !p2 && !p3 && p4) ||
						(!p1 && p2 && !p3 && p4)) {
							del4_1 = 2000
							del4_2 = 2200
					}
					if(!p1 && !p2 && !p3 && p4) {
							del4_1 = 0
							del4_2 = 200
					}
					if(p1 && p2 && p3 && p4 && p5) {
							del5_1 = 8000
							del5_2 = 8200
					}

					if((!p1 && p2 && p3 && p4 && p5) || 
						(p1 && !p2 && p3 && p4 && p5) ||
						(p1 && p2 && !p3 && p4 && p5) ||
						(p1 && p2 && p3 && !p4 && p5))
					{
							del5_1 = 6000
							del5_2 = 6200
					}

					if((!p1 && !p2 && p3 && p4 && p5) ||
						(!p1 && p2 && !p3 && p4 && p5) ||
						(!p1 && p2 && p3 && !p4 && p5) ||
						(p1 && !p2 && !p3 && p4 && p5) ||
						(p1 && !p2 && p3 && !p4 && p5) ||
						(p1 && p2 && !p3 && !p4 && p5)
						)
					{
							del5_1 = 4000
							del5_2 = 4200
					}

					if((!p1 && !p2 && !p3 && p4 && p5) ||
						(!p1 && !p2 && p3 && !p4 && p5) ||
						(!p1 && p2 && !p3 && !p4 && p5) ||
						(p1 && !p2 && !p3 && !p4 && p5) 
						)
					{
							del5_1 = 2000
							del5_2 = 2200
					}
					if(!p1 && !p2 && !p3 && !p4 && p5) {
							del5_1 = 0
							del5_2 = 200
					}
	}	
}
