export function RestartCounts(data) {
    if (data == null) {
        return 0
    }
    let restart = 0
    for (let i = 0; i < data.length; i++) {
        restart += data[i].restartCount
    }
    return restart
}
