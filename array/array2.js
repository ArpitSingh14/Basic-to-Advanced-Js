let items = [130, 200, 150, 80, 90 ];
for(let i = 0; i < items.length; i++)
{
    let offer = items[i]/10;
    items[i] = items[i] - offer;
}
console.log(items)