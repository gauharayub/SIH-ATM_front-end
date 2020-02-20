<template>
  <div>
    <div class="md-layout-item">
      <md-field>
        <label for="list">List</label>
        <md-select v-model="list" name="list" id="list">
          <md-option value="3 month">3 month</md-option>
          <md-option value="6 month">6 month</md-option>
          <md-option value="yearly">yearly</md-option>
        </md-select>
      </md-field>
    </div>
    <b-table striped hover :fields="fields" :items="items">
      <template v-slot:cell(name)="data">
        <router-link :to="`/joblist/${data.item.code}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: "3 month",
      fields: [
        "id",
        {
          key: "name",
          label: "Code",
          formatter(value, key, item) {
            return item.code;
          }
        },
        "Type",
        "Description",
        "Site",
        "Status",
        "Assets"
      ],
      mounted() {
        fetch(
          "https://localhost:8081/joblist",
          {
            method: "get"
          }
        )
          .then(response => {
            return response.json();
          })
          .then(jsondata => {
            this.items = jsondata.results;
          })
          .catch(er => {
            console.log("Cant fetch the data:", er);
            prompt("Check internet connection");
          });
      },
      items: [
        {
          id: "630",
          code: "31-6703750",
          Type: "Isakowicz",
          Description: "Pellentesque at nulla. Suspendisse potenti.",
          Site: "Flores da Cunha",
          Status: true,
          Assets: "GTI"
        },
        {
          id: "12603",
          code: "83-5046375",
          Type: "Kitto",
          Description:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
          Site: "Tsuyama",
          Status: false,
          Assets: "Trans Sport"
        },
        {
          id: "4",
          code: "09-9097560",
          Type: "Lamas",
          Description: "Suspendisse accumsan tortor quis turpis. Sed ante.",
          Site: "Kapiri Mposhi",
          Status: false,
          Assets: "Mountaineer"
        },
        {
          id: "3",
          code: "43-6917560",
          Type: "Paxton",
          Description:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
          Site: "Dongmazar",
          Status: false,
          Assets: "Exige"
        },
        {
          id: "1",
          code: "19-6668196",
          Type: "McEnery",
          Description: "Curabitur convallis.",
          Site: "Alor Setar",
          Status: true,
          Assets: "Daewoo Lacetti"
        },
        {
          id: "2632",
          code: "01-8580786",
          Type: "Mulrenan",
          Description: "Vestibulum ac est lacinia nisi venenatis tristique.",
          Site: "Dobre",
          Status: true,
          Assets: "Explorer"
        },
        {
          id: "6855",
          code: "94-2688888",
          Type: "Elphee",
          Description: "Nunc purus. Phasellus in felis.",
          Site: "Zarzis",
          Status: false,
          Assets: "Envoy XL"
        },
        {
          id: "6",
          code: "59-4508214",
          Type: "Cornu",
          Description: "Nulla mollis molestie lorem.",
          Site: "Kastornoye",
          Status: true,
          Assets: "Mini Cooper"
        },
        {
          id: "04",
          code: "37-5826985",
          Type: "Woodhall",
          Description:
            "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
          Site: "Ibusuki",
          Status: true,
          Assets: "Tucson"
        },
        {
          id: "8",
          code: "29-0483403",
          Type: "Keemar",
          Description:
            "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          Site: "Ciawitali",
          Status: true,
          Assets: "Express 1500"
        },
        {
          id: "2252",
          code: "22-2073453",
          Type: "Ody",
          Description: "Pellentesque ultrices mattis odio. Donec vitae nisi.",
          Site: "Bridel",
          Status: true,
          Assets: "Expedition"
        },
        {
          id: "874",
          code: "47-7642779",
          Type: "Sedcole",
          Description: "Nunc rhoncus dui vel sem. Sed sagittis.",
          Site: "Xinbao",
          Status: true,
          Assets: "R8"
        },
        {
          id: "2",
          code: "31-4380646",
          Type: "Monte",
          Description: "Aliquam quis turpis eget elit sodales scelerisque.",
          Site: "Conceição da Abóboda",
          Status: true,
          Assets: "Taurus"
        },
        {
          id: "505",
          code: "98-2378816",
          Type: "Bever",
          Description:
            "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
          Site: "Tsingoni",
          Status: true,
          Assets: "IS"
        },
        {
          id: "5",
          code: "00-5774314",
          Type: "Belliard",
          Description:
            "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
          Site: "Admiralteisky",
          Status: true,
          Assets: "Savana 2500"
        },
        {
          id: "02",
          code: "82-4364304",
          Type: "Crossland",
          Description: "Nam nulla.",
          Site: "Além",
          Status: false,
          Assets: "Escort"
        },
        {
          id: "67",
          code: "20-9824234",
          Type: "Perrelle",
          Description: "Proin eu mi. Nulla ac enim.",
          Site: "Doksy",
          Status: true,
          Assets: "Cressida"
        },
        {
          id: "09",
          code: "41-2877795",
          Type: "Barthorpe",
          Description: "In hac habitasse platea dictumst.",
          Site: "Gobang",
          Status: true,
          Assets: "T100"
        },
        {
          id: "9",
          code: "96-3341606",
          Type: "Hector",
          Description:
            "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
          Site: "Pingpu",
          Status: true,
          Assets: "G"
        },
        {
          id: "63244",
          code: "68-1857487",
          Type: "Buswell",
          Description:
            "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
          Site: "Lajinha",
          Status: false,
          Assets: "MR2"
        },
        {
          id: "9390",
          code: "60-2459851",
          Type: "Marquiss",
          Description:
            "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          Site: "Qal‘at al Andalus",
          Status: false,
          Assets: "Avenger"
        },
        {
          id: "3797",
          code: "50-1269630",
          Type: "McKenny",
          Description: "Morbi vel lectus in quam fringilla rhoncus.",
          Site: "Permas",
          Status: false,
          Assets: "Pilot"
        },
        {
          id: "2",
          code: "45-1666204",
          Type: "Mc Elory",
          Description:
            "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          Site: "Kholbon",
          Status: false,
          Assets: "Celica"
        },
        {
          id: "96319",
          code: "56-0126781",
          Type: "Fenty",
          Description:
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
          Site: "Sáchica",
          Status: false,
          Assets: "Yukon XL 2500"
        },
        {
          id: "47494",
          code: "31-3494033",
          Type: "Fells",
          Description: "Pellentesque ultrices mattis odio.",
          Site: "Nong Bua",
          Status: true,
          Assets: "riolet"
        },
        {
          id: "0",
          code: "39-1061865",
          Type: "Halmkin",
          Description: "Maecenas pulvinar lobortis est.",
          Site: "Xinjiezi",
          Status: false,
          Assets: "Escort"
        },
        {
          id: "33683",
          code: "33-7106136",
          Type: "Brummell",
          Description: "Cras in purus eu magna vulputate luctus.",
          Site: "Rimpakgede",
          Status: false,
          Assets: "F-Series"
        },
        {
          id: "03",
          code: "19-7743913",
          Type: "Rennebach",
          Description: "Duis bibendum. Morbi non quam nec dui luctus rutrum.",
          Site: "Krasnoye",
          Status: false,
          Assets: "CTS-V"
        },
        {
          id: "61",
          code: "48-1846774",
          Type: "Rilton",
          Description:
            "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
          Site: "Qasr Abu Hadi",
          Status: false,
          Assets: "Alcyone SVX"
        },
        {
          id: "250",
          code: "01-7780686",
          Type: "Offiler",
          Description: "Fusce consequat. Nulla nisl.",
          Site: "Benito Juarez",
          Status: false,
          Assets: "2e"
        },
        {
          id: "294",
          code: "77-9402832",
          Type: "Bridger",
          Description:
            "Nullam sit amet turpis elementum ligula vehicula consequat.",
          Site: "Zhangbei",
          Status: false,
          Assets: "Corvette"
        },
        {
          id: "6",
          code: "00-6364309",
          Type: "Arnault",
          Description:
            "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
          Site: "Mengxi",
          Status: false,
          Assets: "GTO"
        },
        {
          id: "183",
          code: "57-5129519",
          Type: "Giovanni",
          Description:
            "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          Site: "Philipsburg",
          Status: true,
          Assets: "Altima"
        },
        {
          id: "975",
          code: "12-5436664",
          Type: "MacGaffey",
          Description:
            "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
          Site: "Martingança-Gare",
          Status: false,
          Assets: "Century"
        },
        {
          id: "61",
          code: "66-9460106",
          Type: "Jarnell",
          Description:
            "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
          Site: "Sanxing",
          Status: false,
          Assets: "VS Commodore"
        },
        {
          id: "52385",
          code: "31-9344851",
          Type: "Morilla",
          Description: "Proin risus. Praesent lectus.",
          Site: "Ūdalah",
          Status: false,
          Assets: "Monte Carlo"
        },
        {
          id: "4",
          code: "42-4043065",
          Type: "Chataignier",
          Description: "Nunc rhoncus dui vel sem.",
          Site: "Bolo",
          Status: true,
          Assets: "Cayman"
        },
        {
          id: "65",
          code: "89-6503974",
          Type: "Byfford",
          Description:
            "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          Site: "Pointe-à-Pitre",
          Status: false,
          Assets: "Envoy XL"
        },
        {
          id: "12",
          code: "17-7108770",
          Type: "Idle",
          Description:
            "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
          Site: "Tarumizu",
          Status: false,
          Assets: "X6 M"
        },
        {
          id: "1069",
          code: "58-7728161",
          Type: "Rops",
          Description: "Donec ut mauris eget massa tempor convallis.",
          Site: "Shiroishi",
          Status: true,
          Assets: "Astro"
        },
        {
          id: "80",
          code: "48-7777737",
          Type: "Mascall",
          Description: "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
          Site: "Paseyan",
          Status: false,
          Assets: "Avalon"
        },
        {
          id: "8262",
          code: "26-2180552",
          Type: "Goodbur",
          Description: "Aliquam erat volutpat. In congue.",
          Site: "Baima",
          Status: false,
          Assets: "Justy"
        },
        {
          id: "43158",
          code: "73-1924550",
          Type: "McConnulty",
          Description:
            "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
          Site: "Tonshayevo",
          Status: true,
          Assets: "SL-Class"
        },
        {
          id: "9211",
          code: "63-9075669",
          Type: "Rocco",
          Description: "Proin eu mi. Nulla ac enim.",
          Site: "Yushikalasu",
          Status: true,
          Assets: "Z4"
        },
        {
          id: "40548",
          code: "71-8683982",
          Type: "Fisby",
          Description: "Nunc nisl.",
          Site: "Titiakar",
          Status: false,
          Assets: "Touareg"
        },
        {
          id: "701",
          code: "39-0946735",
          Type: "Dybell",
          Description:
            "Proin interdum mauris non ligula pellentesque ultrices.",
          Site: "Nukuoro",
          Status: false,
          Assets: "XC90"
        },
        {
          id: "66895",
          code: "76-8704538",
          Type: "Streather",
          Description: "Vivamus tortor. Duis mattis egestas metus.",
          Site: "Casais Brancos",
          Status: false,
          Assets: "S-Class"
        },
        {
          id: "3",
          code: "02-8445017",
          Type: "Shillingford",
          Description: "Donec semper sapien a libero. Nam dui.",
          Site: "Famagusta",
          Status: true,
          Assets: "Bonneville"
        },
        {
          id: "69",
          code: "37-0765983",
          Type: "Casse",
          Description:
            "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
          Site: "Jiulian",
          Status: true,
          Assets: "3 Series"
        },
        {
          id: "93463",
          code: "94-7612875",
          Type: "Ricold",
          Description:
            "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          Site: "Xiaolongmen",
          Status: false,
          Assets: "Camaro"
        },
        {
          id: "614",
          code: "22-2980119",
          Type: "Lafontaine",
          Description: "Etiam pretium iaculis justo.",
          Site: "Asíni",
          Status: true,
          Assets: "X6 M"
        },
        {
          id: "9498",
          code: "16-0983587",
          Type: "Petkov",
          Description: "Curabitur in libero ut massa volutpat convallis.",
          Site: "Secunda",
          Status: false,
          Assets: "2CV"
        },
        {
          id: "75",
          code: "34-0685948",
          Type: "McCuthais",
          Description:
            "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
          Site: "Arlington",
          Status: true,
          Assets: "Matrix"
        },
        {
          id: "0772",
          code: "18-0282187",
          Type: "Cotelard",
          Description:
            "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
          Site: "Palapye",
          Status: false,
          Assets: "MPV"
        },
        {
          id: "44103",
          code: "46-0358341",
          Type: "MacCallion",
          Description:
            "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
          Site: "Zarya",
          Status: true,
          Assets: "300"
        },
        {
          id: "138",
          code: "99-0345744",
          Type: "Biddwell",
          Description:
            "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
          Site: "Kista",
          Status: false,
          Assets: "Yukon"
        },
        {
          id: "3145",
          code: "30-5329662",
          Type: "Sheers",
          Description: "Nunc purus. Phasellus in felis.",
          Site: "Bambuí",
          Status: true,
          Assets: "CR-V"
        },
        {
          id: "57099",
          code: "49-9624672",
          Type: "Squier",
          Description:
            "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
          Site: "Kýria",
          Status: false,
          Assets: "Grand Caravan"
        },
        {
          id: "21803",
          code: "30-3327103",
          Type: "Christer",
          Description: "Integer non velit.",
          Site: "Lago da Pedra",
          Status: true,
          Assets: "F-Series Super Duty"
        },
        {
          id: "01515",
          code: "93-0036554",
          Type: "McKissack",
          Description: "Phasellus sit amet erat. Nulla tempus.",
          Site: "Gotemba",
          Status: true,
          Assets: "G37"
        },
        {
          id: "105",
          code: "54-0980528",
          Type: "Argrave",
          Description: "Morbi vel lectus in quam fringilla rhoncus.",
          Site: "Fuyu",
          Status: false,
          Assets: "Gallardo"
        },
        {
          id: "5190",
          code: "08-9279991",
          Type: "Bentzen",
          Description: "Ut tellus.",
          Site: "Itagibá",
          Status: false,
          Assets: "Grand Voyager"
        },
        {
          id: "18210",
          code: "84-1672608",
          Type: "Gantlett",
          Description:
            "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
          Site: "Franca",
          Status: true,
          Assets: "Yukon XL 2500"
        },
        {
          id: "17",
          code: "95-3858199",
          Type: "Crat",
          Description: "Cras pellentesque volutpat dui.",
          Site: "Fier-Çifçi",
          Status: true,
          Assets: "Capri"
        },
        {
          id: "01",
          code: "16-1373676",
          Type: "Angrock",
          Description: "In quis justo. Maecenas rhoncus aliquam lacus.",
          Site: "Haolaishan",
          Status: false,
          Assets: "New Beetle"
        },
        {
          id: "97036",
          code: "08-7467589",
          Type: "Jukubczak",
          Description:
            "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
          Site: "Östhammar",
          Status: false,
          Assets: "X5"
        },
        {
          id: "85255",
          code: "06-1288706",
          Type: "Fawssett",
          Description: "Praesent lectus.",
          Site: "Villa Lugano",
          Status: false,
          Assets: "9-5"
        },
        {
          id: "5146",
          code: "93-5635613",
          Type: "Walford",
          Description: "Proin risus. Praesent lectus.",
          Site: "Shixi",
          Status: true,
          Assets: "Silverado"
        },
        {
          id: "3",
          code: "97-3478230",
          Type: "Jealous",
          Description: "Donec ut dolor.",
          Site: "Rixinhe",
          Status: false,
          Assets: "Miata MX-5"
        },
        {
          id: "0",
          code: "23-9014036",
          Type: "MacMillan",
          Description: "Nulla ac enim.",
          Site: "Shiroishi",
          Status: true,
          Assets: "Ram Van 2500"
        },
        {
          id: "90",
          code: "66-3543359",
          Type: "Jeffryes",
          Description:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
          Site: "Danao",
          Status: false,
          Assets: "Grand Marquis"
        },
        {
          id: "4",
          code: "92-7496533",
          Type: "Jaggs",
          Description: "Vivamus vel nulla eget eros elementum pellentesque.",
          Site: "Poconé",
          Status: false,
          Assets: "Corvette"
        },
        {
          id: "8472",
          code: "95-7860026",
          Type: "Tyne",
          Description: "In quis justo.",
          Site: "Krasnoye",
          Status: false,
          Assets: "Diablo"
        },
        {
          id: "9",
          code: "56-8771326",
          Type: "Wilsher",
          Description:
            "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          Site: "Kalapagenep",
          Status: true,
          Assets: "Avanti"
        },
        {
          id: "940",
          code: "79-1953990",
          Type: "Bulgen",
          Description:
            "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
          Site: "Vysokovsk",
          Status: false,
          Assets: "H1"
        },
        {
          id: "53658",
          code: "19-2797959",
          Type: "Taffs",
          Description: "Proin eu mi. Nulla ac enim.",
          Site: "Thanh Chương",
          Status: false,
          Assets: "Savana"
        },
        {
          id: "780",
          code: "35-9559965",
          Type: "Francillo",
          Description: "Donec quis orci eget orci vehicula condimentum.",
          Site: "Itu",
          Status: true,
          Assets: "X-90"
        },
        {
          id: "3",
          code: "35-6198195",
          Type: "Drewry",
          Description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.",
          Site: "Katunayaka",
          Status: false,
          Assets: "Sequoia"
        },
        {
          id: "486",
          code: "39-2908994",
          Type: "Yersin",
          Description: "Quisque ut erat. Curabitur gravida nisi at nibh.",
          Site: "Dinggou",
          Status: false,
          Assets: "Esprit"
        },
        {
          id: "30203",
          code: "06-5445276",
          Type: "Blumsom",
          Description: "Phasellus sit amet erat.",
          Site: "Itaporanga",
          Status: false,
          Assets: "Avanti"
        },
        {
          id: "2",
          code: "27-1041691",
          Type: "Filippo",
          Description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.",
          Site: "Balugo",
          Status: false,
          Assets: "Pathfinder"
        },
        {
          id: "990",
          code: "45-8986789",
          Type: "Rummery",
          Description: "Pellentesque ultrices mattis odio.",
          Site: "Shuakhevi",
          Status: true,
          Assets: "Riviera"
        },
        {
          id: "59",
          code: "61-7677201",
          Type: "Connar",
          Description:
            "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
          Site: "Ifakara",
          Status: false,
          Assets: "Eclipse"
        },
        {
          id: "20",
          code: "77-0399212",
          Type: "Hendrikse",
          Description:
            "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
          Site: "Silongin",
          Status: false,
          Assets: "Swift"
        },
        {
          id: "398",
          code: "38-6008962",
          Type: "Nuton",
          Description: "Nam dui.",
          Site: "Cambebba",
          Status: false,
          Assets: "Commander"
        },
        {
          id: "7",
          code: "52-3247155",
          Type: "Hakking",
          Description:
            "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
          Site: "Hualgayoc",
          Status: true,
          Assets: "Tacoma"
        },
        {
          id: "7",
          code: "50-5041678",
          Type: "Bacchus",
          Description:
            "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
          Site: "Shlissel’burg",
          Status: false,
          Assets: "Cayman"
        },
        {
          id: "41",
          code: "69-6117062",
          Type: "Donne",
          Description: "Integer ac neque.",
          Site: "Elias Fausto",
          Status: false,
          Assets: "Xterra"
        },
        {
          id: "9155",
          code: "86-7478258",
          Type: "Laddle",
          Description: "Nulla mollis molestie lorem. Quisque ut erat.",
          Site: "Seredyna-Buda",
          Status: true,
          Assets: "Q7"
        },
        {
          id: "7448",
          code: "50-5485630",
          Type: "Cribbin",
          Description: "Nullam molestie nibh in lectus. Pellentesque at nulla.",
          Site: "Krivyanskaya",
          Status: false,
          Assets: "Accord"
        },
        {
          id: "7",
          code: "16-3626715",
          Type: "Durden",
          Description: "Quisque ut erat.",
          Site: "Aral",
          Status: true,
          Assets: "Venza"
        },
        {
          id: "74",
          code: "27-8682387",
          Type: "Gregon",
          Description: "Vivamus vestibulum sagittis sapien.",
          Site: "Kuala Tuha",
          Status: true,
          Assets: "Cabriolet"
        },
        {
          id: "46803",
          code: "72-1916612",
          Type: "Bullick",
          Description: "Nunc rhoncus dui vel sem.",
          Site: "Farranacoush",
          Status: true,
          Assets: "Continental"
        },
        {
          id: "42465",
          code: "86-0256536",
          Type: "Jex",
          Description: "Donec semper sapien a libero. Nam dui.",
          Site: "Awayan",
          Status: true,
          Assets: "745"
        },
        {
          id: "23766",
          code: "30-6069784",
          Type: "Luten",
          Description: "Nulla ac enim.",
          Site: "Toulon",
          Status: false,
          Assets: "Sephia"
        },
        {
          id: "653",
          code: "92-1780591",
          Type: "Bedbrough",
          Description:
            "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          Site: "Samajie Ewenkeminzu",
          Status: true,
          Assets: "300"
        },
        {
          id: "2",
          code: "62-7622127",
          Type: "Perceval",
          Description: "Maecenas rhoncus aliquam lacus.",
          Site: "Złoty Stok",
          Status: false,
          Assets: "Town Car"
        },
        {
          id: "864",
          code: "14-0908665",
          Type: "Dragge",
          Description: "Curabitur in libero ut massa volutpat convallis.",
          Site: "Buyant",
          Status: false,
          Assets: "Compass"
        },
        {
          id: "619",
          code: "74-8103571",
          Type: "Dwelley",
          Description:
            "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          Site: "Nonggunong",
          Status: false,
          Assets: "G-Series 3500"
        },
        {
          id: "10833",
          code: "46-6929625",
          Type: "Aucock",
          Description: "Proin eu mi.",
          Site: "Pikalëvo",
          Status: false,
          Assets: "Colorado"
        }
      ]
    };
  },
  methods: {
    fullName(value, key, item) {
      return `${item.first_name} ${item.last_name}`;
    }
  }
};
</script>