
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

cities = ['Arlington','Austin','Corpus Christi','Dallas','El Paso','Fort Worth',
'Garland','Houston','Irving','Laredo','Lubbock','Plano','San Antonio'
]
counties = ['Tarrant County',
'Travis County',
'Nueces County',
'Collin County',
'El Paso County',
'Denton County',
'Collin County',
'Fort Bend County',
'Dallas County',
'Webb County',
'Lubbock County',
'Collin County',
'Bexar County']

zip_codes = [75001,75006,75011,75014,75015,75016,75017,75019,75030,75038,75039,75040,75041,75042,75043,75044,75045,75046,75047,75048,75048,75049,75050,75051,75052,75053,75054,75060,75061,75062,75063,75080,75081,75082,75083,75085,75088,75089,75104,75106,75115,75116,75123,75134,75137,75138,75141,75146,75149,75150,75159,75159,75172,75180,75180,75181,75182,75182,75185,75187,75201,75202,75203,75204,75205,75206,75207,75208,75209,75210,75211,75212,75214,75215,75216,75217,75218,75219,75220,75221,75222,75223,75224,75225,75226,75227,75228,75229,75230,75231,75232,75233,75234,75234,75235,75236,75237,75238,75239,75240,75241,75242,75243,75244,75244,75245,75246,75247,75248,75249,75250,75251,75253,75254,75258,75260,75261,75262,75263,75264,75265,75266,75267,75270,75295,75313,75315,75336,75339,75342,75354,75355,75356,75357,75359,75360,75367,75370,75371,75372,75374,75376,75378,75379,75380,75381,75382,75398,
    ]
    
var ran = Math.floor((Math.random() * 12) + 1);
console.log(cities[Math.floor((Math.random() * 12) + 1)]);
var txtfield = document.getElementById("forminator-field-textarea-1");
txtfield.value = "Abortion";
var txt1 = document.getElementById("forminator-field-text-1");
txt1.value = "My wifes boyfriend";
var txt6 = document.getElementById("forminator-field-text-6");
txt6.value = "Dr. " + cities[Math.floor((Math.random() * cities.length))];
var txt2 = document.getElementById("forminator-field-text-2");
txt2.value = cities[ran]
var txt3 = document.getElementById("forminator-field-text-3");
txt3.value = "Texas";
var txt4 = document.getElementById("forminator-field-text-4");
txt4.value = zip_codes[Math.floor((Math.random() * 145) + 1)];
var txt5 = document.getElementById("forminator-field-text-5");
txt5.value = counties[ran];
var checkbox = document.getElementsByName("checkbox-1[]")[1];
checkbox.checked = true;

sleep(1000)

sub = document.getElementsByClassName("forminator-button forminator-button-submit")[0];
sub.click();
// document.getElementByXpath('//*[@id="forminator-module-26"]/div[13]/div/div/button')