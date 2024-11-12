const stages = {
    start: {
        text: "Your bike adventure begins! Do you take the mountain path or the forest path?",
        choices: ["Mountain Path", "Forest Path"],
        consequences: ["mountainPath", "forestPath"],
        image: "https://images2.alphacoders.com/599/thumb-1920-599278.jpg"
    },
    mountainPath: {
        text: "The mountain path is steep. Do you jump the ramp or avoid it?",
        choices: ["Jump Ramp", "Avoid Ramp"],
        consequences: ["jumpRamp", "avoidRamp"],
        image: "https://cdn.pixabay.com/photo/2021/05/14/15/17/mountain-6253669_640.jpg"
    },
    forestPath: {
        text: "You enter a dense forest. Do you cross the river or follow the riverbank?",
        choices: ["Cross River", "Follow Riverbank"],
        consequences: ["crossRiver", "followRiverbank"],
        image: "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D.jpg"
    },
    jumpRamp: {
        text: "You jumped the ramp! Do you climb the hill for a scenic view or take a shortcut?",
        choices: ["Climb Hill", "Take Shortcut"],
        consequences: ["climbHill", "takeShortcut"],
        image: "https://lh3.googleusercontent.com/cawTyQ4HgV7qn1VU-22FjznjvothNL_ISbLvnKq8XPpaSOLu-_ByY8qOQ53681IshtUrnroLduNu4Uz_D75NKC4=s900"
    },
    avoidRamp: {
        text: "You avoided the ramp. Do you explore a nearby cave or keep riding?",
        choices: ["Explore Cave", "Keep Riding"],
        consequences: ["exploreCave", "keepRiding"],
        image: "https://images.pexels.com/photos/18773302/pexels-photo-18773302/free-photo-of-wooden-ramp-up-the-hill.jpeg"
    },
    crossRiver: {
        text: "You crossed the river. Camp overnight or ride through the night?",
        choices: ["Camp Overnight", "Ride Through Night"],
        consequences: ["campOvernight", "rideThroughNight"],
        image: "https://static.vecteezy.com/system/resources/previews/014/255/633/non_2x/abundance-tropical-rainforest-with-foggy-and-river-flowing-through-in-the-morning-at-national-park-photo.jpg"
    },
    followRiverbank: {
        text: "Following the riverbank, you meet another biker. Help them or pass by?",
        choices: ["Help Biker", "Pass By"],
        consequences: ["helpBiker", "passBy"],
        image: "https://cdn.pixabay.com/photo/2018/11/10/20/16/water-3807414_640.jpg"
    },
    climbHill: {
        text: "At the top of the hill, you see a beautiful view. Rest or keep moving?",
        choices: ["Rest", "Keep Moving"],
        consequences: ["restHill", "keepMovingHill"],
        image: "https://plus.unsplash.com/premium_photo-1672146835758-8232f3df9fb7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Nod2VpenxlbnwwfHwwfHx8MA%3D%3D"
    },
    takeShortcut: {
        text: "You took a shortcut but encountered a fallen tree. Go around or over it?",
        choices: ["Go Around", "Go Over"],
        consequences: ["goAroundTree", "goOverTree"],
        image: "images/shortcut.jpg"
    },
    exploreCave: {
        text: "Inside the cave, you find a map. Take it or leave it?",
        choices: ["Take Map", "Leave Map"],
        consequences: ["takeMap", "leaveMap"],
        image: "https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?cs=srgb&dl=pexels-pixabay-163872.jpg&fm=jpg"
    },
    keepRiding: {
        text: "The path is clear. Do you speed up or ride steadily?",
        choices: ["Speed Up", "Ride Steady"],
        consequences: ["speedUp", "rideSteady"],
        image: "images/clear_path.jpg"
    },
    campOvernight: {
        text: "You camp overnight. Do you start a fire or rest quietly?",
        choices: ["Start Fire", "Rest Quietly"],
        consequences: ["startFire", "restQuietly"],
        image: "https://plus.unsplash.com/premium_photo-1666539896355-636d3a1cc497?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYXIlMjBwYXRofGVufDB8fDB8fHww"
    },
    rideThroughNight: {
        text: "Riding through the night, you spot a fox. Follow it or keep riding?",
        choices: ["Follow Fox", "Keep Riding"],
        consequences: ["followFox", "keepRidingNight"],
        image: "https://www.horseillustrated.com/wp-content/uploads/2018/04/night-beach-ride_800-1.jpg"
    },
    helpBiker: {
        text: "You help the biker. Ride together or go solo?",
        choices: ["Ride Together", "Go Solo"],
        consequences: ["rideTogether", "goSolo"],
        image: "https://driversociety.com/wp-content/uploads/2021/03/istockphoto-981097924-612x612-1.jpg"
    },
    passBy: {
        text: "You pass by and encounter a bridge. Cross it or take a detour?",
        choices: ["Cross Bridge", "Detour"],
        consequences: ["crossBridge", "takeDetour"],
        image: "https://miro.medium.com/v2/resize:fit:8000/0*RY3sbOX1dP5jZDj-"
    },
    goAroundTree: {
        text: "You go around the tree and continue. Encounter an abandoned shack or clear path?",
        choices: ["Check Shack", "Follow Path"],
        consequences: ["checkShack", "followPath"],
        image: "https://cdn.pixabay.com/photo/2021/12/16/15/26/forest-6874717_640.jpg"
    },
    goOverTree: {
        text: "You go over the tree but land in a muddy area. Walk or ride slowly?",
        choices: ["Walk", "Ride Slowly"],
        consequences: ["walkMud", "rideMud"],
        image: "https://img.freepik.com/premium-photo/dirt-road-with-puddle-water-it_662214-128572.jpg"
    },
    takeMap: {
        text: "You took the map. Do you follow it or continue on your own path?",
        choices: ["Follow Map", "Own Path"],
        consequences: ["followMap", "ownPath"],
        image: "https://www.shutterstock.com/image-photo/woman-following-map-nature-260nw-1090761758.jpg"
    },
    leaveMap: {
        text: "You leave the map behind. You come across a crossroad. Left or right?",
        choices: ["Left", "Right"],
        consequences: ["leftPath", "rightPath"],
        image: "https://www.shutterstock.com/image-photo/crossroads-pathway-visible-blank-wooden-260nw-1728441616.jpg"
    },
    speedUp: {
        text: "Speeding up, you encounter a muddy puddle. Jump over it or slow down?",
        choices: ["Jump Over", "Slow Down"],
        consequences: ["jumpMud", "slowMud"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Begliktash_puddle_Бегликташ_локва_—_копия.jpg/800px-Begliktash_puddle_Бегликташ_локва_—_копия.jpg"
    },
    rideSteady: {
        text: "Riding steadily, you see a sign for a rest stop. Rest or keep going?",
        choices: ["Rest", "Keep Going"],
        consequences: ["restStop", "keepGoing"],
        image: "https://www.myparkingsign.com/img/lg2/K/k2-4958-2.png"
    },
    startFire: {
        text: "You start a fire and attract attention. Investigate or stay put?",
        choices: ["Investigate", "Stay Put"],
        consequences: ["investigateFire", "stayFire"],
        image: "https://www.wandernorthgeorgia.com/wp-content/uploads/2016/12/fire.jpg"
    },
    restQuietly: {
        text: "You rest quietly. You hear footsteps. Check or ignore?",
        choices: ["Check", "Ignore"],
        consequences: ["checkSteps", "ignoreSteps"],
        image: "https://img.freepik.com/premium-photo/animal-tracks-signs-forest-trees-created-with-generative-ai_124507-202818.jpg"
    },
    followFox: {
        text: "Following the fox, you find a hidden path. Explore or turn back?",
        choices: ["Explore", "Turn Back"],
        consequences: ["explorePath", "turnBack"],
        image: "https://www.reconnectwithnature.org/getmedia/b3d7982c-0938-4df6-987c-c225baaac277/red-fox-looking-back-shutterstock.jpg?width=1500&height=1000&ext=.jpg"
    },
    keepRidingNight: {
        text: "You keep riding and see strange lights. Follow or avoid?",
        choices: ["Follow Lights", "Avoid Lights"],
        consequences: ["followLights", "avoidLights"],
        image: "https://i.pinimg.com/736x/8a/db/56/8adb56b8a2af887da8144ae50ddc6cdd.jpg"
    },
    rideTogether: {
        text: "Riding with your new friend, you see a mountain. Climb it or go around?",
        choices: ["Climb", "Go Around"],
        consequences: ["climbMountain", "aroundMountain"],
        image: "https://as2.ftcdn.net/v2/jpg/04/40/93/77/1000_F_440937704_aoVHHBh7JUdCS8izHWPF7h84ai7KjCqP.jpg"
    },
    goSolo: {
        text: "Going solo, you reach a swamp. Cross or detour?",
        choices: ["Cross", "Detour"],
        consequences: ["crossSwamp", "detourSwamp"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/পানিতে_নিমজ্জিত_রাতারগুল_জলাবনের_গাছ.jpg/800px-পানিতে_নিমজ্জিত_রাতারগুল_জলাবনের_গাছ.jpg"
    },
    crossBridge: {
        text: "Crossing the bridge, it starts to wobble. Run or go slowly?",
        choices: ["Run", "Go Slowly"],
        consequences: ["runBridge", "slowBridge"],
        image: "https://www.shutterstock.com/image-photo/young-traveler-man-dressed-yellow-600nw-2195503369.jpg"
    },
    takeDetour: {
        text: "Taking a detour, you find a hidden cave. Enter or keep going?",
        choices: ["Enter Cave", "Keep Going"],
        consequences: ["enterHiddenCave", "keepDetour"],
        image: "https://thumbs.dreamstime.com/z/detour-sign-forest-gravel-road-shows-to-left-detour-sign-forest-gravel-road-shows-to-left-276991517.jpg"
    },
    // Additional stages to reach a total of 50
    checkShack: {
        text: "In the shack, you find supplies. Take them or leave?",
        choices: ["Take Supplies", "Leave"],
        consequences: ["takeSupplies", "leaveShack"],
        image: "https://www.shutterstock.com/image-photo/old-inhabitable-forest-shack-on-600w-1515215045.jpg"
    },
    followPath: {
        text: "Following the path, you spot a rare bird. Photograph or move on?",
        choices: ["Photograph", "Move On"],
        consequences: ["photographBird", "moveOn"],
        image: "https://images.unsplash.com/photo-1692713472263-2ba424185f49?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0JTIwYmlyZHN8ZW58MHx8MHx8fDA%3D"
    },
    walkMud: {
        text: "Walking through the mud, you find an old trail. Follow or ignore?",
        choices: ["Follow Trail", "Ignore Trail"],
        consequences: ["followTrail", "ignoreTrail"],
        image: "https://t3.ftcdn.net/jpg/02/27/29/52/360_F_227295283_a1iGmnCbfrn4LRbAeCgOFt9NALqjHOXi.jpg"
    },
    rideMud: {
        text: "Riding slowly, your tire gets stuck. Fix it or push the bike?",
        choices: ["Fix Tire", "Push Bike"],
        consequences: ["fixTire", "pushBike"],
        image: "https://www.shutterstock.com/image-photo/dump-truck-car-stuck-mud-260nw-2022128036.jpg"
    },
    followMap: {
        text: "The map leads to a scenic waterfall. Rest or explore further?",
        choices: ["Rest", "Explore Further"],
        consequences: ["restWaterfall", "exploreWaterfall"],
        image: "https://images.unsplash.com/photo-1656086407297-0779ee11ca2e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0ZXJmYWxsJTIwaW4lMjB0aGUlMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D"
    },
        ownPath: {
        text: "You choose your own path and find a mysterious cabin. Enter or pass by?",
        choices: ["Enter Cabin", "Pass By"],
        consequences: ["enterCabin", "passCabin"],
        image: "https://images.squarespace-cdn.com/content/v1/56385d11e4b09e28f586da76/4d45ca41-e614-45a3-8989-d29035053950/Log+Cabin+Pic+2022.jpeg"
    },
    leftPath: {
        text: "You take the left path and encounter a field of wildflowers. Pick some or keep going?",
        choices: ["Pick Flowers", "Keep Going"],
        consequences: ["pickFlowers", "keepGoingField"],
        image: "https://images.stockcake.com/public/6/e/5/6e52d55a-2b9e-479e-82ab-23cf1e3cc49d_large/sunset-forest-flowers-stockcake.jpg"
    },
    rightPath: {
        text: "The right path leads to an old railway track. Follow it or cross over?",
        choices: ["Follow Track", "Cross Over"],
        consequences: ["followTrack", "crossTrack"],
        image: "https://barnimages.com/wp-content/uploads/2018/04/20180212-barnimages-011-2000x1334.jpg"
    },
    jumpMud: {
        text: "You jump over the mud but encounter a dense thicket. Cut through or find another way?",
        choices: ["Cut Through", "Find Another Way"],
        consequences: ["cutThicket", "findWay"],
        image: "https://thumbs.dreamstime.com/b/mud-stewed-forest-mud-hole-forest-108786102.jpg"
    },
    slowMud: {
        text: "Slowing down, you find a small bridge. Cross it or go around?",
        choices: ["Cross Bridge", "Go Around"],
        consequences: ["crossSmallBridge", "goAroundBridge"],
        image: "https://media.istockphoto.com/id/493078222/photo/little-wooden-bridge-on-first-sunrays-at-sunny-autumn-morning.jpg?s=612x612&w=0&k=20&c=RHzGKax6JPAsCBd2FnkLPIug6FSKGh5f0z3e1yPwErU=z"
    },
    restStop: {
        text: "You take a rest. You hear birds singing. Observe or continue?",
        choices: ["Observe Birds", "Continue"],
        consequences: ["observeBirds", "continueJourney"],
        image: "https://www.shutterstock.com/shutterstock/videos/1106127605/thumb/1.jpg?ip=x480"
    },
    keepGoing: {
        text: "You keep going and see a herd of deer. Approach or keep your distance?",
        choices: ["Approach Deer", "Keep Distance"],
        consequences: ["approachDeer", "distanceDeer"],
        image: "https://m.media-amazon.com/images/I/6131ZN3+i6L._AC_UF894,1000_QL80_.jpg"
    },
    investigateFire: {
        text: "You investigate the noise near the fire and find another camper. Talk or ignore?",
        choices: ["Talk to Camper", "Ignore"],
        consequences: ["talkCamper", "ignoreCamper"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtr8ad3fVnuqTUGLtEUeRLDCnjnYYdYJe_oA&s"
    },
    stayFire: {
        text: "You stay put by the fire. A wild animal approaches. Scare it or remain calm?",
        choices: ["Scare Animal", "Remain Calm"],
        consequences: ["scareAnimal", "calmAnimal"],
        image: "https://plus.unsplash.com/premium_photo-1661963661518-5d1e2f4d8b81?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0JTIwYW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    checkSteps: {
        text: "Checking the source of the footsteps, you find a hidden passage. Enter or avoid?",
        choices: ["Enter Passage", "Avoid Passage"],
        consequences: ["enterPassage", "avoidPassage"],
        image: "https://www.shutterstock.com/image-photo/light-end-tunnel-halnaker-tree-260nw-1703194387.jpg"
    },
    ignoreSteps: {
        text: "You ignore the footsteps, but you feel uneasy. Rest again or keep moving?",
        choices: ["Rest Again", "Keep Moving"],
        consequences: ["restAgain", "moveUneasy"],
        image: "images/uneasy.jpg"
    },
    explorePath: {
        text: "You explore the hidden path and reach an ancient ruin. Investigate or turn back?",
        choices: ["Investigate Ruin", "Turn Back"],
        consequences: ["investigateRuin", "turnBackFromRuin"],
        image: "https://artfiles.alphacoders.com/708/thumb-1920-7086.jpg"
    },
    turnBack: {
        text: "You decide to turn back, but a storm starts. Seek shelter or continue?",
        choices: ["Seek Shelter", "Continue"],
        consequences: ["seekShelter", "continueStorm"],
        image: "https://cdn.pixabay.com/photo/2021/05/22/20/31/thunderstorm-6274575_1280.jpg"
    },
    followLights: {
        text: "You follow the strange lights and reach a camp. Join them or leave?",
        choices: ["Join Camp", "Leave Camp"],
        consequences: ["joinCamp", "leaveCamp"],
        image: "https://revere-health.hqdemo.app/wp-content/uploads/iStock_14979700_XXXLARGE.jpg"
    },
    avoidLights: {
        text: "You avoid the lights and find a shortcut home. Take it or stick to the trail?",
        choices: ["Take Shortcut", "Stick to Trail"],
        consequences: ["shortcutHome", "trailHome"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QeJsDFziP9zQLqoPejMc2v6Kq-dlOBTxMg&s"
    },
    climbMountain: {
        text: "Climbing the mountain, you find a beautiful view. Capture it or descend?",
        choices: ["Capture View", "Descend"],
        consequences: ["captureView", "descend"],
        image: "https://i.natgeofe.com/n/cfa19a0d-eff0-4628-8fdd-2ad8d66845dd/mountain-range-appenzell-switzerland_16x9.jpg"
    },
    aroundMountain: {
        text: "Going around the mountain, you see a herd of sheep. Feed them or continue?",
        choices: ["Feed Sheep", "Continue"],
        consequences: ["feedSheep", "continueAround"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHK6o6R2vgPl_1ydFZ7vXc4Ikd6AFFEQfAA&s"
    },
    crossSwamp: {
        text: "You cross the swamp and see fireflies. Catch one or keep riding?",
        choices: ["Catch Firefly", "Keep Riding"],
        consequences: ["catchFirefly", "rideFirefly"],
        image: "https://images.squarespace-cdn.com/content/v1/5b3ca0c85b409b2cac077a7b/1548773113511-TOHJX2YQLU0B3M96Z52T/image-asset.jpeg"
    },
    detourSwamp: {
        text: "Detouring around the swamp, you find an old canoe. Use it or leave?",
        choices: ["Use Canoe", "Leave Canoe"],
        consequences: ["useCanoe", "leaveCanoe"],
        image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/sunshinecoastcanada/Inland_Lake_canoe_Tomas_Jirku_May2016_web_1440x900_5ff2de04-e560-45c7-8f83-5371d7e083ba.jpg"
    },
    runBridge: {
        text: "Running across the bridge, you encounter a strange monument. Inspect or ignore?",
        choices: ["Inspect", "Ignore"],
        consequences: ["inspectMonument", "ignoreMonument"],
        image: "https://ironwoodforest.org/wp-content/uploads/2023/05/ironwood-4024-lb.jpg"
    },
    slowBridge: {
        text: "Crossing the bridge slowly, you spot a beautiful waterfall. Admire or move on?",
        choices: ["Admire Waterfall", "Move On"],
        consequences: ["admireWaterfall", "moveOnWaterfall"],
        image: "https://www.nationalforests.org/assets/header-images/_1600x1600_fit_center-center_80_none/Columbia-River-Gorge_Multnomah-Falls_John-Tregoning.jpg"
    },
    enterHiddenCave: {
        text: "In the hidden cave, you find ancient writings. Decode or ignore?",
        choices: ["Decode", "Ignore"],
        consequences: ["decodeWritings", "ignoreWritings"],
        image: "https://media.istockphoto.com/id/176966995/photo/archeological-pre-historic-human-clift-paint.jpg?s=612x612&w=0&k=20&c=LZ9JoUBXZGYw2ADoVqm1S_2JS0ypqR0Gjb-mNRJkY7c="
    },
    keepDetour: {
        text: "Continuing the detour, you find wild berries. Eat some or ignore?",
        choices: ["Eat Berries", "Ignore"],
        consequences: ["eatBerries", "ignoreBerries"],
        image: "https://finland.fi/wp-content/uploads/2015/05/2971-berry2_b-jpg.jpg"
    },
    takeSupplies: {
        text: "Taking the supplies, you feel more prepared. Camp nearby or continue?",
        choices: ["Camp Nearby", "Continue"],
        consequences: ["campNearby", "continuePrepared"],
        image: "https://thestokefam.com/wp-content/uploads/2020/08/Jet-Boil-Genesis-1-1024x683.jpg"
    },
    leaveShack: {
        text: "Leaving the shack, you see a foggy trail. Follow or wait for it to clear?",
        choices: ["Follow Trail", "Wait"],
        consequences: ["followFoggyTrail", "waitClear"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDPACZWMgEreuRbM8GXYMY9-0UTx_QNpxbQ&s"
    },
    photographBird: {
        text: "You capture a beautiful photo of the bird. Rest a bit or keep going?",
        choices: ["Rest", "Keep Going"],
        consequences: ["restBird", "moveOnBird"],
        image: "https://freerangestock.com/sample/125549/bird-in-forest-.jpg"
    },
    moveOn: {
        text: "Moving on, you find an abandoned car. Check it out or pass by?",
        choices: ["Check Car", "Pass By"],
        consequences: ["checkCar", "passCar"],
        image: "https://images.snapwi.re/419a/59e792fb18454098408b457e.w800.jpg"
    },
    // Sample endings for multiple choices to complete the story arc
    celebrate: {
        text: "You celebrate your journey with a cheer and smile. Adventure complete!",
        choices: [],
        image: "images/celebrate.jpg"
    },
    endJourney: {
        text: "After a long journey, you finally head home, content with your adventure.",
        choices: [],
        image: "images/home_end.jpg"
    },
};

let currentStage = "start";

function startGame() {
    currentStage = "start";
    updatePage();
}

function updatePage() {
    const stage = stages[currentStage];
    document.getElementById("story-container").textContent = stage.text;
    document.getElementById("image-container").innerHTML = `<img src="${stage.image}" alt="Stage image">`;

    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = ""; // Clear previous choices

    stage.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => makeChoice(index));
        choicesContainer.appendChild(button);
    });

    // Add reset button at each stage
    const resetButton = document.createElement("button");
    resetButton.textContent = "Restart Game";
    resetButton.addEventListener("click", startGame);
    choicesContainer.appendChild(resetButton);
}

function makeChoice(index) {
    const stage = stages[currentStage];
    currentStage = stage.consequences[index];
    updatePage();
}

startGame();
