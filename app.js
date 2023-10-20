
//i have no good topics so why not iphone
const iphone = [
    {
        name: 'iPhone 15',
        release_date:'September 24, 2021',
        variants:'Pro, Pro Max, Plus',
        feature:['Titanium Frame (Pro/ProMax) Exclusive', 'A16 & A17 Pro Bionic Chip', 'USB-C'],
        cameras:[3],
    },
    {
        name: 'iPhone 14',
        release_date:'September 16, 2022',
        variants:'Pro, Pro Max, Plus',
        feature: ['A15 & A16 Bionic Chip', 'Dynamic Island', 'Optical Zoom Additions'],
        cameras:[2,3],
    },
    {
        name: 'iPhone 13',
        release_date:'September 22, 2023',
        variants:'Mini, Pro, Pro Max',
        feature:['A15 Bionic Chip', 'Optical Zoom Additions'],
        cameras:[2,3],
    }

]
iphone.forEach((iphone) => {
    console.log(iphone.name);
    console.log(iphone.variants);
    console.log(iphone.release_date);   
    iphone.feature.forEach((feature) => {
        console.log(feature);
    });
});

const filtered = iphone.filter((iphone) => iphone.cameras.includes(2));
console.log(filtered);
