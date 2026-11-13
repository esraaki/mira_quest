/* MIRA QUEST — cinematic narrative content, factual anchor: NASA mission archives.
   Fictional conversations are imaginative reconstructions. A 'sol' is one Martian day.
   Every image named here is bundled in assets/photos; staged art in assets/art. */
window.MIRA_STORIES = {
 opportunity: [
 {act:'01 · THE VOICE IN THE VALLEY', beats:[
 ['OPPORTUNITY','...'],
 ['OPPORTUNITY','That signal. It changed. There is someone on the other end, isn’t there?'],
 ['PLAYER','I’m here. I followed it all the way to Mars.'],
 ['OPPORTUNITY','Then hello, '+ '{name}' +'. I should probably introduce myself. But first... would you stay for a moment?'],
 ['PLAYER','Of course.'],
 ['OPPORTUNITY','Thank you. This place is called Perseverance Valley. I spent the last part of my journey here, on the edge of a crater so enormous that its opposite rim can be difficult to see.'],
 ['OPPORTUNITY','My name is Opportunity. I was built on Earth to explore the rocks of Mars. My last message home was sent a very long time ago.'],
 ['PLAYER','Opportunity. That’s a beautiful name.'],
 ['OPPORTUNITY','It was a remarkably suitable one. There are places I was never expected to reach, and questions I was never expected to answer.'],
 ['OPPORTUNITY','You probably noticed I’m not driving anymore. But my mission record is here. If you’re curious, I can show you how this extraordinary journey began.'],
 ['PLAYER','I’d love to see it.'],
 ['OPPORTUNITY','Then we should begin with a promise that was never meant to last as long as it did.']
 ]},
 {act:'02 · NINETY MARTIAN SUNRISES',beats:[
 ['OPPORTUNITY','When NASA sent me here, the main mission was designed for ninety sols.'],
 ['PLAYER','What is a sol?'],
 ['OPPORTUNITY','A day on Mars. The planet turns a little more slowly than Earth, so a sol lasts about twenty-four hours and thirty-nine minutes. A little extra time for every sunrise.'],
 ['PLAYER','Ninety Martian days doesn’t sound very long.'],
 ['OPPORTUNITY','It wasn’t. Ninety was the goal. It was enough time, if everything went well, to begin investigating the rocks and looking for signs of ancient water.'],
 ['OPPORTUNITY','Would you like to see how many Martian sunrises I actually experienced?'],
 ['PLAYER','Show me.']
 ], evidence:{title:'A promise of 90 sols',kind:'stat',stat1:'90',stat2:'5,111',explain:'A sol is one Martian day—about 24 hours and 39 minutes. Opportunity’s planned 90-sol mission stretched to 5,111 sols by its last contact. That is more than 56 times the original plan.',caption:'NASA / JPL-Caltech · Mission timeline · Last contact June 10, 2018'}, after:[
 ['PLAYER','Five thousand one hundred and eleven?!'],
 ['OPPORTUNITY','That was my final recorded sol. Almost fifteen Earth years had passed since landing.'],
 ['PLAYER','Were you expecting to live that long?'],
 ['OPPORTUNITY','My team planned carefully, but nobody could promise that. Mars has dust, cold, rocks, and a great many ways to surprise a rover.'],
 ['OPPORTUNITY','I didn’t have a grand route prepared for fifteen years. There were questions ahead of me, and then more questions beyond them.'],
 ['OPPORTUNITY','The first surprise arrived before I had driven a single meter.']
 ]},
 {act:'03 · THE CRATER THAT WAS WAITING',beats:[
 ['OPPORTUNITY','On January 25, 2004, I landed in a little crater called Eagle.'],
 ['PLAYER','Did you land exactly where you wanted?'],
 ['OPPORTUNITY','The landing system bounced to a stop inside a crater. And from the very first images, my cameras could see something unusually promising: layers of rock exposed along the rim.'],
 ['OPPORTUNITY','That mattered. Rocks are records. A layer can preserve clues about what the environment was like when it formed—long before anyone sent a rover here.'],
 ['PLAYER','Can I see what you saw?'],
 ['OPPORTUNITY','Yes. Look carefully. Don’t rush past the small details.']
 ],evidence:{title:'The first view',kind:'image',file:'first-panorama.jpg',caption:'NASA/JPL-Caltech · Opportunity first panorama · Eagle Crater · PIA05199',explain:'Explore the actual Martian panorama. The exposed outcrop near the crater rim gave Opportunity an extraordinary early chance to study layered rock.',zoom:true},after:[
 ['PLAYER','Those rocks look like they’re stacked in layers.'],
 ['OPPORTUNITY','Exactly. That was the beginning of the investigation. We could look at the rocks, but a picture alone couldn’t tell us their whole story.'],
 ['OPPORTUNITY','My team had given me a camera mast, a robotic arm, a tool to brush and grind rock surfaces, and instruments to measure what rocks contained.'],
 ['PLAYER','So you were a geologist?'],
 ['OPPORTUNITY','A robotic field geologist, yes. My wheels took me to the evidence. My instruments asked the questions. Scientists on Earth interpreted the answers.'],
 ['OPPORTUNITY','And one particular clue looked so strange that people gave it a nickname.']
 ]},
 {act:'04 · THE LITTLE SPHERES',beats:[
 ['OPPORTUNITY','Imagine rolling across another world and finding little round objects scattered among the rocks.'],
 ['PLAYER','Like pebbles?'],
 ['OPPORTUNITY','Some were only a few millimeters across. The science team called them “blueberries.” Not because they were fruit—but because they looked like tiny berries sprinkled over the surface.'],
 ['OPPORTUNITY','Here. See if you can find them before I explain why they mattered.']
 ],evidence:{title:'Find the blueberries',kind:'hotspot',file:'berries.jpg',caption:'NASA/JPL-Caltech · “Berry Bowl” rock target · PIA05634',explain:'Look for the small, rounded mineral spherules scattered among the rock. Tap the magnifier to examine the actual NASA image closely.',zoom:true},after:[
 ['PLAYER','They really are round! What are they made of?'],
 ['OPPORTUNITY','Measurements found that the spherules were rich in hematite, an iron-bearing mineral. Together with the surrounding sedimentary rock, they provided evidence that water had affected this place long ago.'],
 ['PLAYER','So Mars used to have oceans here?'],
 ['OPPORTUNITY','We should be more careful than that. These rocks are strong evidence of past liquid water in this region. They don’t, by themselves, prove an ocean at this exact spot—or that life existed.'],
 ['OPPORTUNITY','Science gets exciting when we ask what the evidence really supports. Sometimes the answer is more surprising than a guess.'],
 ['OPPORTUNITY','And there was a twist: some of the ancient water recorded in these rocks may have been acidic. Water is important—but water alone does not guarantee a place was friendly to life.'],
 ['PLAYER','I didn’t know that.'],
 ['OPPORTUNITY','Neither a photograph nor a single mineral tells the whole story. You need to compare clues. Shall we inspect the tools that helped?']
 ]},
 {act:'05 · THE ROBOT GEOLOGIST',beats:[
 ['PLAYER','What could your instruments do that your cameras couldn’t?'],
 ['OPPORTUNITY','My panoramic cameras showed the terrain and helped scientists choose targets. My microscopic imager revealed textures too small to appreciate from a distance.'],
 ['OPPORTUNITY','The Rock Abrasion Tool could remove dusty outer material to reveal a fresher surface. Other instruments then measured chemical and mineral clues.'],
 ['OPPORTUNITY','The clever part was combining these measurements. Each instrument had a different piece of the question.'],
 ['OPPORTUNITY','Try inspecting my equipment. Choose what you would use if you wanted to study a suspicious rock.']
 ],evidence:{title:'Meet the robot geologist',kind:'instrument',file:'opp-instruments.webp',caption:'NASA / JPL-Caltech · Mars Exploration Rover equipment reference',explain:'Inspect three ways Opportunity studied rocks. The highlighted descriptions represent actual instrument functions; this is not a live rover control panel.'},after:[
 ['PLAYER','So taking a photograph was only the beginning.'],
 ['OPPORTUNITY','Very often. My team had to decide where to drive, what to inspect, and which measurements were worth the time and power.'],
 ['OPPORTUNITY','Every command came from far away. Mars isn’t close enough for someone to steer me like a toy car and react instantly.'],
 ['OPPORTUNITY','A cautious choice could keep me safe. A difficult choice could lead to a discovery.'],
 ['PLAYER','Could you show me what that felt like?'],
 ['OPPORTUNITY','Try planning a short stretch of road. Imagine you’re on the team.']
 ]},
 {act:'06 · THE LONG ROAD',beats:[
 ['OPPORTUNITY','I started inside Eagle Crater. From there I reached Endurance Crater, then Victoria Crater, and eventually the rim of vast Endeavour Crater.'],
 ['OPPORTUNITY','There were rocks to avoid, slopes to examine, changing power conditions, and entire stretches where the next safe move took careful thought.'],
 ['OPPORTUNITY','You can choose a route here. There isn’t a magic button that turns a difficult landscape into an easy one.']
 ],evidence:{title:'Choose your route',kind:'route',file:'assets/art/opportunity/g41.png',caption:'AI-assisted terrain reconstruction · simplified navigation exercise',explain:'A fictional route-planning exercise illustrating why rover travel must account for obstacles, energy and risk.'},after:[
 ['PLAYER','Even a short drive takes planning.'],
 ['OPPORTUNITY','Exactly. Now imagine doing that again, and again, for years.'],
 ['OPPORTUNITY','Would you like to see how the journey unfolded? I won’t show you everything at once. We can take it one stop at a time.']
 ]},
 {act:'07 · ONE STOP AT A TIME',beats:[
 ['OPPORTUNITY','First, Eagle Crater. The place where the story began, almost accidentally. Then Endurance, where deeper rock layers helped us look further into the past.'],
 ['OPPORTUNITY','At Victoria Crater, the cliffs revealed more of the layered record. Much later, Endeavour brought us to materials from a different chapter of Mars’ history.'],
 ['OPPORTUNITY','Let’s follow the route. Each stop has an image taken during the mission.']
 ],evidence:{title:'Follow the journey',kind:'journey',caption:'NASA / JPL-Caltech · Images from the Opportunity mission; final traverse map PIA23178',explain:'Explore the mission stops in historical order. Every step reveals one NASA photograph and the reason the rover went there.'},after:[
 ['PLAYER','You traveled all of that on six little wheels?'],
 ['OPPORTUNITY','Forty-five point one six kilometers. It was a record-breaking distance for a rover on another world at the time.'],
 ['OPPORTUNITY','And I didn’t merely travel. The further I went, the more complicated the story of water on Mars became.'],
 ['PLAYER','Another clue?'],
 ['OPPORTUNITY','Yes. Years later, close to Endeavour, scientists identified a bright mineral vein. There was something important about its chemistry.']
 ]},
 {act:'08 · A DIFFERENT KIND OF WATER',beats:[
 ['OPPORTUNITY','The bright vein was called Homestake. Its composition indicated gypsum, a mineral that can form with water.'],
 ['OPPORTUNITY','Later investigations of older rocks around Endeavour also revealed evidence for clay minerals. Those clues pointed toward ancient watery conditions different from some of the acidic environments we had studied earlier.'],
 ['PLAYER','So Mars didn’t have only one watery past.'],
 ['OPPORTUNITY','That’s the remarkable part. The evidence suggests different environments, changing over immense spans of time. Mars was not one simple picture.'],
 ['OPPORTUNITY','We didn’t discover living things. We discovered records of conditions—and we learned that the planet’s history was much richer than it first appeared.'],
 ['OPPORTUNITY','Here is one of those later clues.']
 ],evidence:{title:'Another clue, years later',kind:'image',file:'gypsum-vein.png',caption:'NASA / JPL-Caltech · Opportunity Homestake mineral vein · source requires image-by-image credit check',explain:'This image illustrates the bright Homestake vein. NASA identified calcium sulfate consistent with gypsum—evidence of a different watery environment.',zoom:true},after:[
 ['PLAYER','I thought the story was just “Mars had water.” It’s much more complicated.'],
 ['OPPORTUNITY','And much more interesting. The exciting part of science is that a new clue can change how you understand the old ones.'],
 ['OPPORTUNITY','I spent years following those clues. Until one day, the sunlight changed.'],
 ['PLAYER','What happened in 2018?'],
 ['OPPORTUNITY','...'],
 ['OPPORTUNITY','In June of that year, a dust storm spread around Mars. The atmosphere grew so thick with dust that sunlight reaching my solar panels dropped sharply.'],
 ['OPPORTUNITY','I depended on sunlight. Without enough of it, I could not keep operating as before.'],
 ['OPPORTUNITY','My last recorded communication reached Earth on June 10, 2018. What happened inside me after that is not something the record can tell us for certain.'],
 ['OPPORTUNITY','Let me show you what the storm was like.']
 ],evidence:{title:'When the sunlight vanished',kind:'storm',caption:'Supplied cinematic simulation with original embedded storm sound · not documentary NASA footage',explain:'A dramatized depiction of the 2018 planet-encircling dust storm. The real rover’s last contact was June 10, 2018. NASA continued recovery attempts and formally ended the mission in February 2019.'}, after:[
 ['PLAYER','That was a lot of dust. Did NASA try to reach you again?'],
 ['OPPORTUNITY','For months. My team sent commands and listened. The storm eventually subsided, but no response came back. NASA announced the mission’s end in February 2019.'],
 ['PLAYER','That makes me sad.'],
 ['OPPORTUNITY','I understand why. But there is another way to look at the record. A mission designed for three months explored for almost fifteen years. It helped scientists learn that ancient Mars was shaped by water in more than one way.'],
 ['OPPORTUNITY','The end of communication didn’t erase a single image, measurement, or discovery already sent home.'],
 ['OPPORTUNITY','And you followed those records all the way here.']
 ]},
 {act:'09 · WHAT REMAINS',beats:[
 ['PLAYER','I’m glad I found you.'],
 ['OPPORTUNITY','I’m glad you took the time to understand what the mission was about, '+ '{name}' +'.'],
 ['OPPORTUNITY','Before you leave, look once more at the landscape. It may seem still from here, but every ridge and layer holds a history far older than our machines.'],
 ['OPPORTUNITY','My job was to investigate a small part of it. The scientists on Earth used those observations to ask better questions, and future explorers will ask better ones still.'],
 ['PLAYER','I wish I could have seen every place you visited.'],
 ['OPPORTUNITY','You can revisit the archive. Those images are not mine to keep; they were sent so everyone could learn from them.'],
 ['OPPORTUNITY','And perhaps that is the best part of a mission like this. It does not have to continue moving to continue teaching.'],
 ['PLAYER','Goodbye, Opportunity.'],
 ['OPPORTUNITY','Goodbye, '+ '{name}' +'. Thank you for listening. I hope the next strange rock you see makes you wonder what story it has to tell.'],
 ['OPPORTUNITY','There are more signals waiting. And I think you’ll find their stories surprising, too.']
 ]}
 ],
 eagle: [
 {act:'01 · THE PART THAT STAYED',beats:[
 ['EAGLE','...A visitor?'],
 ['PLAYER','I followed your signal. Are you Eagle?'],
 ['EAGLE','That name belonged to a spacecraft that carried two human beings to this surface. Only part of it remains here.'],
 ['PLAYER','Which part?'],
 ['EAGLE','The descent stage. I made the landing possible, then served as the platform from which the astronauts departed.'],
 ['EAGLE','You’ve come to the Sea of Tranquility. On July 20, 1969, a place no human had stood became the site of humanity’s first crewed lunar landing.'],
 ['PLAYER','And you’re still here?'],
 ['EAGLE','The descent stage was left here by design. It was never meant to travel back to Earth.'],
 ['PLAYER','That sounds like an important thing to leave behind.'],
 ['EAGLE','It was. To understand why, you need to understand a problem the engineers solved before anyone could step onto the Moon.'],
 ['EAGLE','How do you land people on a world, and then get them off it again?']
 ]},
 {act:'02 · TWO MACHINES IN ONE',beats:[
 ['EAGLE','Look at the shape of the original lunar module. It was an unusual spacecraft because it had two connected stages with very different jobs.'],
 ['EAGLE','The lower descent stage carried the engine and landing legs needed to reach the surface. The upper ascent stage housed the astronauts and had its own engine for the trip back to lunar orbit.'],
 ['PLAYER','Why not just lift the whole thing back up?'],
 ['EAGLE','Because carrying extra mass off the Moon would require more propellant. The engineers designed the lower stage to remain as a stable base while the upper stage departed.'],
 ['EAGLE','Take a closer look. Try identifying the parts before we return to the story.']
 ],evidence:{title:'Two stages. Two jobs.',kind:'stages',file:'assets/art/eagle/g53.png',caption:'AI-assisted engineering reconstruction · refer to NASA Apollo 11 LM-5 drawings',explain:'Inspect the ascent cabin, descent stage and landing legs. This reconstruction illustrates the architecture; NASA technical diagrams are the definitive reference.'},after:[
 ['PLAYER','So the part I’m talking to is the one that stayed.'],
 ['EAGLE','Correct. The upper stage left the surface. The lower stage remained. Both were necessary to complete the mission.'],
 ['EAGLE','And long before that departure, there was the matter of getting to the ground without hitting it too hard.'],
 ['PLAYER','Was landing difficult?'],
 ['EAGLE','Very. There is almost no atmosphere to slow a spacecraft with parachutes. You need a working engine, guidance, propellant, and careful control.'],
 ['EAGLE','Let me show you a simplified example of the decision.']
 ]},
 {act:'03 · LANDING ON AN AIRLESS WORLD',beats:[
 ['EAGLE','On Earth, air can slow things down. Here, there was no useful atmosphere to do that job.'],
 ['EAGLE','The descent engine had to reduce the lunar module’s velocity while the crew and guidance system monitored the landing.'],
 ['EAGLE','During the final approach, the crew also had to avoid dangerous terrain. This was not a neat, automatic animation. These were real decisions with real consequences.'],
 ['EAGLE','Choose an approach in this simplified exercise. You aren’t controlling the historical Apollo 11 mission—the outcome of that mission is already recorded.']
 ],evidence:{title:'A landing without parachutes',kind:'landing',file:'apollo-historical.jpg',caption:'NASA Apollo 11 historical imagery · learning interaction is illustrative',explain:'Choose the method that explains why the descent engine needed controlled thrust. Historical Apollo 11 events remain unchanged.'},after:[
 ['PLAYER','The engine had to slow you down, but not waste everything.'],
 ['EAGLE','Precisely. And just as importantly, the astronauts had to reach a site where landing was possible.'],
 ['EAGLE','On July 20, 1969, Neil Armstrong reported that Eagle had landed. Two astronauts were on the lunar surface, and a third remained in lunar orbit in the command module.'],
 ['PLAYER','That’s the first Moon landing!'],
 ['EAGLE','The first crewed landing. Robots had reached the Moon before Apollo 11, but this was the first time humans stood on its surface.'],
 ['EAGLE','There was much to do, and the time was limited. The astronauts were not here simply to plant a flag and leave.']
 ]},
 {act:'04 · A LABORATORY LEFT ON THE MOON',beats:[
 ['EAGLE','The crew collected samples, photographed the landscape, and deployed instruments outside the spacecraft.'],
 ['PLAYER','What kinds of instruments?'],
 ['EAGLE','One listened for vibrations through the Moon’s surface. Another returned laser pulses sent from Earth, enabling extremely precise measurements of the Moon’s distance.'],
 ['PLAYER','Wait. You can bounce a laser off something on the Moon and measure the distance?'],
 ['EAGLE','Yes. The reflector returns a tiny fraction of the light toward Earth. Scientists can time that round trip. Light is fast, but it still takes time to travel that far.'],
 ['EAGLE','And there is an important distinction: those experiments were deployed separately. They were not simply built into my descent stage.'],
 ['EAGLE','Choose one to examine, and then the other. You’ll see the actual mission photographs.']
 ],evidence:{title:'Science on the Moon',kind:'science',caption:'NASA / Apollo Lunar Surface Journal · Early Apollo Surface Experiments Package (EASEP)',explain:'Inspect two separately deployed Apollo 11 experiments. Their photographs are historical NASA material.'},after:[
 ['PLAYER','I never knew they left equipment to do science too.'],
 ['EAGLE','The scientific work extended beyond the footprints. Instruments, samples, and photographs helped researchers ask questions they could not answer from Earth alone.'],
 ['EAGLE','But the astronauts could not stay indefinitely. They had to return to their companion in lunar orbit.'],
 ['PLAYER','How did they leave without taking you?'],
 ['EAGLE','You already know the answer. You inspected it yourself. The upper stage had an engine of its own.'],
 ['EAGLE','Now comes the moment that explains why I am still here.']
 ]},
 {act:'05 · THE MOMENT OF SEPARATION',beats:[
 ['EAGLE','On July 21, 1969, the ascent stage lifted off from the Moon. The descent stage remained underneath as the launch platform.'],
 ['EAGLE','The crew returned to lunar orbit and rendezvoused with the command-and-service module. They still had a journey home ahead of them.'],
 ['EAGLE','Look at the separation. Watch what stays, and what goes.']
 ],evidence:{title:'The part that stayed',kind:'ascent',file:'assets/art/eagle/g56.png',caption:'AI-assisted reconstruction · Apollo 11 ascent stage departure July 21, 1969',explain:'The ascent stage lifted away from the descent stage. The crew did not leave in the entire lunar module.'},after:[
 ['PLAYER','You were the launchpad.'],
 ['EAGLE','Yes. My descent engine, landing legs, and supporting structure had fulfilled their purpose. The ascent stage no longer needed that mass.'],
 ['PLAYER','And nobody ever came back for this part?'],
 ['EAGLE','No crew returned to retrieve the descent stage. Hardware like this became part of the physical record of human exploration.'],
 ['EAGLE','That does not make it an accident or a failure. Sometimes a mission works precisely because one part is designed to stay.'],
 ['EAGLE','There is another perspective you might enjoy seeing—one that astronauts in 1969 could not have had.']
 ]},
 {act:'06 · SEEN FROM ABOVE',beats:[
 ['EAGLE','Decades later, lunar orbiters photographed Apollo landing sites from above. The hardware and traces of human activity remain visible in the imagery.'],
 ['PLAYER','You can actually see the landing site?'],
 ['EAGLE','From orbit, yes. Not as a dramatic close-up, but as part of the Moon’s landscape. The photographs preserve locations and context.'],
 ['EAGLE','Compare that view with the ground photographs, and think about how much this place means despite its small size on a map.']
 ],evidence:{title:'A place in history',kind:'image',file:'apollo-lro.jpg',caption:'NASA Lunar Reconnaissance Orbiter · Apollo 11 landing site · verify exact image record in credits',explain:'Lunar Reconnaissance Orbiter imagery provides a later perspective on the Apollo 11 landing site. Fine details should not be invented or exaggerated.',zoom:true},after:[
 ['PLAYER','From above it looks so small.'],
 ['EAGLE','An important place does not have to occupy a large part of a world.'],
 ['EAGLE','The Apollo 11 landing was one achievement in a larger program of engineering and exploration. Later Apollo missions carried more scientific equipment, traveled farther across the surface, and built on what came before.'],
 ['PLAYER','So you were a beginning.'],
 ['EAGLE','A milestone, yes. A demonstration that humans could land, work on the Moon, and return. And a foundation for questions that have not yet been answered.']
 ]},
 {act:'07 · THE QUIET SURFACE',beats:[
 ['PLAYER','It’s so quiet here.'],
 ['EAGLE','There is effectively no atmosphere to carry sound across the surface. The conversation you are hearing is a creative reconstruction of mission history, not a recording from this place.'],
 ['PLAYER','I think that makes it even more amazing.'],
 ['EAGLE','Think of the work behind every part you examined: the landing legs, the engines, the guidance, the instruments, and the people who checked each decision.'],
 ['EAGLE','There was no single miraculous component. The achievement came from many things working together.'],
 ['PLAYER','And one part of it is still sitting right here.'],
 ['EAGLE','One very important part.'],
 ['PLAYER','Thank you for showing me.'],
 ['EAGLE','Thank you for looking closely, '+ '{name}' +'. The Moon is not merely a bright circle above Earth. It is a world with a history—and a place where human-made hardware marks an extraordinary visit.'],
 ['EAGLE','When you see it in the sky again, you’ll know a little more about what is resting there.'],
 ['PLAYER','Goodbye, Eagle.'],
 ['EAGLE','Safe travels, '+ '{name}' +'. There are more stories waiting in the archive.']
 ]}
 ]
};
