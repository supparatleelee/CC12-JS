let styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

// styles[2] = 'Rock-n-Roll'

styles[1] = 'Classic';

delete styles[0];

console.log(styles.length); // 3 with one empty item (undefined)
