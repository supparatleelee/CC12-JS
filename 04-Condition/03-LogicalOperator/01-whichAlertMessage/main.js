alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // alert 1 return undefined, alert 2
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // side effect - alert(1) -> return undefined, alert 2 return undefined
alert(null || (2 && 3) || 4); // 3
// (2 && 3) - all true -> 3
