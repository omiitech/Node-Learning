async function lift() {
    for (let floor = 1; floor <= 20; floor++) {
        if (floor === 13) {
            console.log('Skipping floor 13...');
            break;
        }
        console.log('Lift at floor: ' + floor);
        await new Promise(r => setTimeout(r, 1000));
    }
}
lift();