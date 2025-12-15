function drawGift(size: number, symbol: string): string {
    if (size < 2) return '';
    let gift = "";
    for(let x = 0; x < size; x++){
        for (let y = 0; y < size; y++) {
            if (x == 0 || x == size-1) {
                gift += symbol;
            } else {
                if (y == 0 || y == size-1) gift+=symbol;
                else gift+=" ";
            }
        }
        if(x != size-1 ) gift+="\n";
    }
    return gift;
}