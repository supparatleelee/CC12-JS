const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

const permission = Object.assign(permission1, permission2, permission3, permission4)

console.log(permission)

// {
//     canView: true,
//     canDelete: true,
//     canUpdate: true,
//     canCreate: false
// }