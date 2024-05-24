const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get('id');

//  (يمكن أن تكون من قاعدة بيانات API في التطبيق الحقيقي)
const cars = {
    1: {  
        image:'images/Mercedes-Benz X Class Diesel.jpg', 
        name:'Mercedes-Benz X Class',
        model: '2017',
        price: '20000$',
       details: '1.6 GDi Blue Drive S 5dr 2WD'},

    2: { 
        image:'images/Mercedes-Benz S Class.jpg', 
    name:'Mercedes-Benz S Class',
    model: ' 2020',
    price: '52082.00$',
   details: 'S350d L Grand Edition Executive 4dr 9G-Tronic'},

    3: { 
        image:'images/Mercedes-Benz S Class11.jpg', 
    name:'Mercedes-Benz S Class',
    model: ' 2018',
    price: '39109.00$',
   details: 'S350d AMG Line Premium 4dr 9G-Tronic '},
   4: { 
    image:'images/Mercedes-Benz S Class1.jpg', 
name:'Mercedes-Benz S Class',
model: ' 2020',
price: '52082.00$',
details: 'S350d L Grand Edition Executive 4dr 9G-Tronic'},
   5: { 
    image:'images/Mercedes-Benz C.jpg', 
name:'Mercedes-Benz C',
model: ' 2020',
price: '27946.00$',
details: '220 Amg Line D Auto'},
    6:{ 
        image:'images/BMW X4 M.jpg', 
    name:'BMW X4 M',
    model: ' 2024',
    price: '52082.00$',
   details: 'S350d L Grand Edition Executive 4dr 9G-Tronic'},
   7:{ 
    image:'images/BMW X5 M.jpg', 
name:'BMW X5 M',
model: ' 2024',
price: '111786.00$',
details: 'xDrive Competition 5dr Step Auto '},
    8:{ 
    image:'images/BMW I4.jpg',
name:'BMW I4',
model: '2023',
price: '71136.00$',
details: '400kW M50 83.9kWh 5dr Auto'},
    9:{ 
    image:'images/BMW I41.jpg', 
    name:'BMW I4',
    model: '2023',
    price: '50812.00$',
    details: '210kW eDrive35 M Sport 70kWh 5dr Auto'
    },
    10:{ 
image:'images/BMW I42.jpg', 
name:'BMW I4',
model: '2022',
price: '53352.00$',
details: '250kW eDrive40 M Sport 83.9kWh 5dr Auto'
},
    11:{ 
    image:'images/Hyundai Tucson.jpg', 
    name:'Hyundai Tucson',
    model: '2015',
    price: '10670.00$',
    details: '1.7 CRDi Blue Drive SE Nav 5dr 2WD'},
    12:{ 
        image:'images/Hyundai Tucson1.jpg', 
        name:'Hyundai Tucson',
        model: '2017',
        price: '11813.00$',
        details: '1.6 GDi Blue Drive S 5dr 2WD '
    },
    13:{ 
        image:'images/Hyundai Tucson2.jpg', 
        name:'Hyundai Tucson',
        model: '2016',
        price: '12232.00$',
        details: '1.6 GDi Blue Drive S 5dr 2WD '
    },
    14:{ 
        image:'images/Hyundai Kona.jpg', 
        name:'Hyundai Kona',
        model: '2020',
        price: '18546.00$',
        details: '150kW Premium 64kWh 5dr Auto '
    },   
    15:{ 
        image:'images/Toyota Gr Supra.jpg', 
        name:'Toyota Gr Supra',
        model: '2021',
        price: '42569.00$',
        details: '2.0 Pro 3dr Auto'
    },   
    16:{ 
        image:'images/Toyota C-HR.jpg', 
        name:'Toyota C-HR',
        model: '2023',
        price: '32747.74$',
        details: '1.8 Hybrid Excel 5dr CVT'
    }, 
    17:{ 
        image:'images/Toyota RAV4.jpg', 
        name:'Toyota RAV4',
        model: '2020',
        price: '26012.66$',
        details: '2.5 VVT-i Hybrid Design 5dr CVT'
    }, 
    18:{ 
        image:'images/Toyota C-HR1.jpg', 
        name:'Toyota C-HR',
        model: '2022',
        price: '26923.80$',
        details: '2.0 Hybrid GR Sport 5dr CVT'
    }, 
    19:{ 
        image:'images/Ferrari 488.jpg', 
        name:'Ferrari 488',
        model: '2020',
        price: '532325.55$',
        details: 'Pista S-A'
    }, 
    20:{ 
        image:'images/Ferrari 812 Superfast.jpg', 
        name:'Ferrari 812 Superfast',
        model: '2019',
        price: '266226.32$',
        details: '2dr Auto '
    }, 
    21:{ 
        image:'images/Ferrari 4881.jpg', 
        name:'Ferrari 488',
        model: '2019',
        price: '380595.61$',
        details: 'Pista S-A '
    }, 
    22:{ 
        image:'images/Mazda MX-5.jpg', 
        name:'Mazda MX-5',
        model: '2015',
        price: '15319.00$',
        details: '1.5 Sport Nav 2dr'
    }, 
    23:{ 
        image:'images/Mazda Cx-60.jpg', 
        name:'Mazda Cx-60',
        model: '2023',
        price: '337970.00$',
        details: '2.5 PHEV Exclusive-Line 5dr Auto '
    }, 
    24:{ 
        image:'images/Mazda 6.jpg', 
        name:'Mazda 6',
        model: '2021',
        price: '21341.00$',
        details: '2.0 Skyactiv-G SE-L 4dr Auto '
    }, 
    25:{ 
        image:'images/Mazda Cx-30.jpg', 
        name:'Mazda Cx-30',
        model: '2020',
        price: '18266.00$',
        details: '2.0 Skyactiv-X MHEV SE-L Lux 5dr'
    }, 
    26:{ 
        image:'images/Nissan X-Trail.jpg', 
        name:'Nissan X-Trail',
        model: '2023',
        price: '36839.62$',
        details: '1.5 E-Power 204 N-Connecta 5dr Xtronic '
    }, 
    27:{ 
        image:'images/Nissan Qashqai.jpg', 
        name:'Nissan Qashqai',
        model: '2023',
        price: '31972.57$',
        details: '1.3 DiG-T MH 158 N-Connecta 5dr Xtronic '
    }, 


};

// عرض تفاصيل السيارة المحددة
const carDetailsElement = document.getElementById('car-details');
if (cars[carId]) {
    const car = cars[carId];

    // إنشاء عناصر HTML لتفاصيل السيارة
    const carImageElement = document.createElement('img');
    const carNameElement = document.createElement('h2');
    const carModelElement = document.createElement('p');
    const carPriceElement = document.createElement('p');
    const carDetailElement = document.createElement('p');

    // تعيين النصوص والمصادر للعناصر
    
    carImageElement.src = car.image;
    carNameElement.textContent = car.name;
    carModelElement.textContent = 'versin: ' + car.model;
    carPriceElement.textContent = 'price: ' + car.price;
    carDetailElement.textContent = 'details: ' + car.details;
    // إضافة العناصر إلى العنصر الرئيسي
    carDetailsElement.appendChild(carImageElement);
    carDetailsElement.appendChild(carNameElement);
   carDetailsElement.appendChild(carModelElement);
   carDetailsElement.appendChild(carPriceElement);
    carDetailsElement.appendChild(carDetailElement);
} else {
    carDetailsElement.textContent = 'السيارة غير موجودة';
}