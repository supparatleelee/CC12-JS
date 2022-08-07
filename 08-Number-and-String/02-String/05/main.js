function truncate(str, length) {
    if (str.length > length) {
        // let modifyString = str.slice(0, length - 1) + "..."
        let modifyString = str.substring(0, length - 1) + "..."
        return modifyString
    } else {
        return str
    }
}

truncate("What I'd like to tell on this topic is:", 20); // What I'd like to te…
truncate("Hi everyone!", 20); // Hi everyone!