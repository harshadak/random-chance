function randonChance(quarter) {
    while (quarter > 0) {
        if ((Math.floor(Math.random() * 100) + 1) === 6) {
            quarter += Math.floor(Math.random() * 50) + 51);
    }
    quarter--;
    if (quarter === 0) {
        return 0;
    }
}
}
