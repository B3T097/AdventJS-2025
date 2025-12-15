function manufactureGifts(giftsToProduce: Array<{ toy: string, quantity: number }>): string[] {
    let toysList: string[] = [];
    giftsToProduce.forEach(gift => {
        if (Number(gift.quantity) > 0) {
            let list = Array.from({ length: gift.quantity }, (_, i) => gift.toy);
            toysList.push(...list);
        }
    });
    return toysList;
}