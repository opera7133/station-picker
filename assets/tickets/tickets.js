const allJRTickets = {
  id: "jr-all",
  name: "JR 企画券（全国）",
  tickets: {
    seishun18: {
      id: "seishun18",
      name: "青春18きっぷ",
      selects: {
        company: [
          "hokkaido-jr-hokkaido",
          "tohoku-jr-east",
          "kanto-jr-east",
          "chubu-jr-central",
          "chubu-jr-west",
          "chubu-jr-east",
          "kinki-jr-west",
          "kinki-jr-central",
          "chugoku-jr-west",
          "shikoku-jr-shikoku",
          "kyushu-jr-kyushu",
        ],
        railway: [],
        stations: {},
      },
    },
    "east-hokkaido": {
      id: "east-hokkaido",
      name: "北海道＆東日本パス",
      selects: {
        company: ["hokkaido-jr-hokkaido", "tohoku-jr-east", "kanto-jr-east"],
        railway: ["aomori-aoimori", "iwate-igr-iwate", "niigata-hokuhoku"],
        stations: {},
      },
    },
  },
};

const eastJRTickets = {
  id: "jr-east",
  name: "JR東日本 企画券",
  tickets: {
    shuumatsu: {
      id: "shuumatsu",
      name: "週末パス",
      selects: {
        company: ["kanto-jr-east", "chubu-jr-east", "nagano-shinano"],
        railway: [
          "shinkansen-yamagata",
          "shinkansen-joetsu",
          "shinkansen-joetsu-shisen",
          "tohoku-jr-east-rifu",
          "tohoku-jr-east-joban",
          "tohoku-jr-east-banetsu-west",
          "tohoku-jr-east-senzan",
          "tohoku-jr-east-senseki",
          "tohoku-jr-east-suigun",
          "tohoku-jr-east-suigun-hitachiota",
          "tohoku-jr-east-yonesaka",
          "tohoku-jr-east-tadami",
          "tohoku-jr-east-banetsu-east",
          "tohoku-jr-east-ishinomaki",
          "tohoku-jr-east-rikuu-east",
          "tohoku-jr-east-rikuu-west",
          "tohoku-jr-east-aterazawa",
          "yamagata-flower",
          "fukushima-abukuma",
          "fukushima-fukushima",
          "ibaraki-kashima-rinkai",
          "ibaraki-hitachinaka",
          "niigata-tokimeki-myoko",
          "niigata-hokuhoku",
          "yamanashi-fujikyuko",
          "nagano-alpico",
          "nagano-ueda",
          "nagano-nagaden",
          "shizuoka-izukyu",
        ],
        stations: {
          "shinkansen-tohoku": {
            start: "東京",
            end: "くりこま高原",
          },
          "shinkansen-hokuriku": {
            start: "高崎",
            end: "上越妙高",
          },
          "tohoku-jr-east-tohoku": {
            start: "黒磯",
            end: "小牛田",
          },
          "tohoku-jr-east-uetsu": {
            start: "新津",
            end: "酒田",
          },
          "tohoku-jr-east-ou": {
            start: "福島",
            end: "湯沢",
          },
          "fukushima-aizu": {
            start: "西若松",
            end: "会津田島",
          },
        },
      },
    },
    "nonbiri-tabi": {
      id: "nonbiri-tabi",
      name: "東日本のんびり旅パス",
      selects: {
        company: ["kanto-jr-east", "chubu-jr-east", "tohoku-jr-east"],
        railway: [],
        stations: {},
      },
    },
    tokunai: {
      id: "tokunai",
      name: "都区内パス",
      selects: {
        company: [],
        railway: ["kanto-jr-east-yamanote"],
        stations: {
          "kanto-jr-east-yokosuka": {
            start: "東京",
            end: "西大井",
          },
          "kanto-jr-east-soubu-rapid": {
            start: "東京",
            end: "新小岩",
          },
          "kanto-jr-east-saikyo": {
            start: "大崎",
            end: "浮間舟渡",
          },
          "kanto-jr-east-soubu": {
            start: "西荻窪",
            end: "小岩",
          },
          "kanto-jr-east-chuo-rapid": {
            start: "東京",
            end: "西荻窪",
          },
          "kanto-jr-east-keihin-tohoku-negishi": {
            start: "蒲田",
            end: "赤羽",
          },
          "kanto-jr-east-tokaido": {
            start: "東京",
            end: "品川",
          },
          "kanto-jr-east-keiyo": {
            start: "東京",
            end: "葛西臨海公園",
          },
          "kanto-jr-east-joban-rapid": {
            start: "上野",
            end: "北千住",
          },
          "kanto-jr-east-joban-local": {
            start: "北千住",
            end: "金町",
          },
          "kanto-jr-east-utsunomiya": {
            start: "東京",
            end: "赤羽",
          },
        },
      },
    },
    "tokunai-monorail": {
      id: "tokunai-monorail",
      name: "モノレール&都区内パス",
      append: "tokunai",
      selects: {
        company: [],
        railway: ["tokyo-tokyo-monorail"],
        stations: {},
      },
    },
    "holiday-suica": {
      id: "holiday-suica",
      name: "のんびりホリデーSuicaパス",
      selects: {
        company: [],
        railway: [
          "kanto-jr-east-yamanote",
          "kanto-jr-east-keihin-tohoku-negishi",
          "kanto-jr-east-saikyo",
          "kanto-jr-east-yokosuka",
          "kanto-jr-east-yokohama",
          "kanto-jr-east-nanbu",
          "kanto-jr-east-nanbu-hamakawasaki",
          "kanto-jr-east-chuo-rapid",
          "kanto-jr-east-itsukaichi",
          "kanto-jr-east-oume",
          "kanto-jr-east-soubu",
          "kanto-jr-east-soubu-rapid",
          "kanto-jr-east-keiyo",
          "kanto-jr-east-musashino",
          "kanto-jr-east-joban-rapid",
          "kanto-jr-east-joban-local",
          "kanto-jr-east-tsurumi",
          "kanto-jr-east-tsurumi-okawa",
          "kanto-jr-east-tsurumi-umi-shibaura",
          "kanto-jr-east-kawagoe",
          "kanto-jr-east-sagami",
          "kanto-jr-east-narita-kuko",
          "kanto-jr-east-narita-abiko",
          "kanto-jr-east-togane",
          "tokyo-rinkai",
          "tokyo-tokyo-monorail",
        ],
        stations: {
          "kanto-jr-east-tokaido": {
            start: "東京",
            end: "小田原",
          },
          "kanto-jr-east-utsunomiya": {
            start: "東京",
            end: "自治医大",
          },
          "kanto-jr-east-takasaki": {
            start: "大宮",
            end: "神保原",
          },
          "kanto-jr-east-chuo-honsen": {
            start: "高尾",
            end: "大月",
          },
          "kanto-jr-east-hachiko": {
            start: "八王子",
            end: "寄居",
          },
          "kanto-jr-east-ryomo": {
            start: "小山",
            end: "足利",
          },
          "kanto-jr-east-mito": {
            start: "小山",
            end: "下館",
          },
          "kanto-jr-east-soubu-honsen": {
            start: "千葉",
            end: "成東",
          },
          "kanto-jr-east-narita": {
            start: "佐倉",
            end: "成田",
          },
          "kanto-jr-east-uchibo": {
            start: "蘇我",
            end: "君津",
          },
          "kanto-jr-east-sotobo": {
            start: "千葉",
            end: "茂原",
          },
          "kanto-jr-east-joban": {
            start: "取手",
            end: "土浦",
          },
        },
      },
    },
    "kyujitsu-odekake": {
      id: "kyujitsu-odekake",
      name: "休日おでかけパス",
      append: "holiday-suica",
      selects: {
        company: [],
        railway: ["kanto-jr-east-kururi"],
        stations: {
          "shinkansen-tohoku": {
            start: "東京",
            end: "小山",
          },
          "shinkansen-joetsu": {
            start: "大宮",
            end: "本庄早稲田",
          },
        },
      },
    },
    "tokyo-free": {
      id: "tokyo-free",
      name: "東京フリーきっぷ",
      append: "tokunai",
      selects: {
        company: ["kanto-tokyo-metro", "tokyo-toei"],
        railway: ["tokyo-nt", "tokyo-tokyo-sakura"],
        stations: {},
      },
    },
    tokiwa: {
      id: "tokiwa",
      name: "ときわ路パス",
      selects: {
        company: ["ibaraki-kantetsu"],
        railway: [
          "ibaraki-hitachinaka",
          "ibaraki-kashima-rinkai",
          "tochigi-mooka",
          "tohoku-jr-east-suigun-hitachiota",
        ],
        stations: {
          "kanto-jr-east-kashima": {
            start: "潮来",
            end: "鹿島神宮",
          },
          "kanto-jr-east-joban": {
            start: "取手",
            end: "大津港",
          },
          "kanto-jr-east-mito": {
            start: "小田林",
            end: "友部",
          },
          "tohoku-jr-east-suigun": {
            start: "水戸",
            end: "下野宮",
          },
        },
      },
    },
    "thankyou-chiba": {
      id: "thankyou-chiba",
      name: "サンキュー♥ちばフリーパス",
      selects: {
        company: [],
        railway: [
          "chiba-ryutetsu",
          "chiba-km",
          "chiba-is",
          "chiba-cd",
          "kanto-ks-shin-keisei",
          "kanto-ks-chiba",
          "kanto-ks-chihara",
          "kanto-ks-higashi-narita",
          "kanto-ks-shibayama",
          "kanto-jr-east-soubu-honsen",
          "kanto-jr-east-narita",
          "kanto-jr-east-narita-kuko",
          "kanto-jr-east-narita-abiko",
          "kanto-jr-east-uchibo",
          "kanto-jr-east-togane",
          "kanto-jr-east-sotobo",
          "kanto-jr-east-kururi",
        ],
        stations: {
          "chiba-hs": {
            start: "矢切",
            end: "印旛日本医大",
          },
          "kanto-ks-narita-skyaccess": {
            start: "東松戸",
            end: "成田空港（成田第1ターミナル）",
          },
          "kanto-ks-honsen": {
            start: "国府台",
            end: "成田空港",
          },
          "kanto-jr-east-keiyo": {
            start: "舞浜",
            end: "蘇我",
          },
          "kanto-jr-east-kashima": {
            start: "香取",
            end: "十二橋",
          },
          "kanto-jr-east-joban-rapid": {
            start: "松戸",
            end: "天王台",
          },
          "kanto-jr-east-joban-local": {
            start: "松戸",
            end: "天王台",
          },
          "kanto-jr-east-musashino": {
            start: "南船橋",
            end: "南流山",
          },
          "kanto-jr-east-soubu": {
            start: "市川",
            end: "千葉",
          },
          "kanto-jr-east-soubu-rapid": {
            start: "市川",
            end: "千葉",
          },
        },
      },
    },
    "gunma-oneday": {
      id: "gunma-oneday",
      name: "ぐんまワンデーローカルパス",
      selects: {
        company: [],
        railway: [
          "gunma-joshin",
          "gunma-jomo",
          "gunma-watarase",
          "kanto-jr-east-shinetsu-ty",
          "kanto-jr-east-ryomo",
          "kanto-jr-east-agatsuma",
          "kanto-tb-koizumi",
          "kanto-tb-koizumi-ota",
          "kanto-tb-kiryu",
        ],
        stations: {
          "kanto-jr-east-takasaki": {
            start: "深谷",
            end: "高崎",
          },
          "kanto-jr-east-hachiko": {
            start: "群馬藤岡",
            end: "倉賀野",
          },
          "kanto-jr-east-joetsu": {
            start: "高崎",
            end: "水上",
          },
          "chubu-jr-east-joetsu": {
            start: "水上",
            end: "土合",
          },
          "kanto-tb-isesaki": {
            start: "川俣",
            end: "伊勢崎",
          },
          "kanto-tb-sano": {
            start: "館林",
            end: "佐野",
          },
        },
      },
    },
  },
};

const centralJRTickets = {
  id: "jr-tokai",
  name: "JR東海 企画券",
  tickets: {
    "jr-tokai-16": {
      id: "jr-tokai-16",
      name: "JR東海＆16私鉄 乗り鉄☆たびきっぷ",
      selects: {
        company: ["chubu-jr-central", "kinki-jr-central", "shiga-ohmi"],
        railway: [
          "shizuoka-shizutetsu",
          "shizuoka-enshu",
          "shizuoka-gakunan",
          "shizuoka-izu-hakone",
          "shizuoka-tenhama",
          "gifu-aketetsu",
          "gifu-yoro",
          "gifu-tarutetsu",
          "gifu-nagatetsu",
          "aichi-aichi-kanjo",
          "aichi-nagoya-rinkai",
          "aichi-tkj",
          "aichi-toyotetsu",
          "mie-ise",
          "mie-sangi-hokusei",
        ],
        stations: {},
      },
    },
    fujisan: {
      id: "fujisan",
      name: "富士山満喫きっぷ",
      selects: {
        company: [],
        railway: ["shizuoka-izu-hakone"],
        stations: {
          "chubu-jr-central-tokaido": {
            start: "熱海",
            end: "静岡",
          },
          "chubu-jr-central-gotemba": {
            start: "駿河小山",
            end: "沼津",
          },
          "chubu-jr-central-minobu": {
            start: "富士",
            end: "芝川",
          },
        },
      },
    },
    "aozora-free": {
      id: "aozora-free",
      name: "青空フリーパス",
      selects: {
        company: [],
        railway: [
          "chubu-jr-central-tokaido-akasaka",
          "chubu-jr-central-taketoyo",
          "chubu-jr-central-taita",
          "kinki-jr-central-kansai",
          "kinki-jr-central-meisho",
          "kinki-jr-central-sangu",
          "mie-ise",
        ],
        stations: {
          "chubu-jr-central-tokaido": {
            start: "二川",
            end: "米原",
          },
          "chubu-jr-central-iida": {
            start: "豊橋",
            end: "飯田",
          },
          "chubu-jr-central-chuo": {
            start: "名古屋",
            end: "木曽平沢",
          },
          "chubu-jr-central-takayama": {
            start: "岐阜",
            end: "下呂",
          },
          "kinki-jr-central-kisei": {
            start: "亀山",
            end: "紀伊長島",
          },
        },
      },
    },
    "kyujitsu-norihodai": {
      id: "kyujitsu-norihodai",
      name: "休日乗り放題きっぷ",
      selects: {
        company: [],
        railway: ["chubu-jr-central-gotemba", "chubu-jr-central-minobu"],
        stations: {
          "chubu-jr-central-tokaido": {
            start: "熱海",
            end: "豊橋",
          },
        },
      },
    },
  },
};

const westJRTickets = {
  id: "jr-west",
  name: "JR西日本 企画券",
  tickets: {
    "kansai-maas": {
      id: "kansai-maas",
      name: "KANSAI MaaSワンデーパス",
      selects: {
        company: ["osaka-osaka-metro", "kinki-hankyu"],
        railway: [
          "kinki-jr-west-osaka-loop",
          "kinki-jr-west-yumesaki",
          "kinki-kintetsu-namba",
          "kinki-kintetsu-nara",
          "kinki-kintetsu-kyoto",
          "kinki-kintetsu-kashihara",
          "kinki-kintetsu-keihanna",
          "kinki-kintetsu-minami-osaka",
          "kinki-kintetsu-ikoma",
          "kinki-kintetsu-tenri",
          "kinki-kintetsu-shigi",
          "kinki-kintetsu-nagano",
          "kinki-kintetsu-gose",
          "kinki-hanshin-honsen",
          "kinki-hanshin-namba",
          "kinki-hanshin-mukogawa",
          "kinki-keihan-honsen",
          "kinki-keihan-nakanoshima",
          "kinki-keihan-oto",
          "kinki-keihan-uji",
          "kinki-keihan-katano",
        ],
        stations: {
          "kinki-jr-west-kyoto": {
            start: "新大阪",
            end: "大阪",
          },
          "kinki-kintetsu-osaka": {
            start: "大阪上本町",
            end: "三本松",
          },
          "kinki-kintetsu-yoshino": {
            start: "橿原神宮前",
            end: "壺阪山",
          },
          "kinki-hanshin-kobe-kosoku": {
            start: "元町",
            end: "高速長田",
          },
          "kinki-nankai-nankai": {
            start: "難波",
            end: "堺",
          },
          "kinki-nankai-koya": {
            start: "岸里玉出",
            end: "中百舌鳥",
          },
        },
      },
    },
    "hokuriku-tabiwa": {
      id: "hokuriku-tabiwa",
      name: "北陸おでかけ tabiwaパス",
      selects: {
        company: [],
        railway: [
          "fukui-hapiline",
          "ishikawa-ir-ishikawa",
          "toyama-ainokaze",
          "niigata-tokimeki-nihonkai",
          "chubu-jr-west-nanao",
          "chubu-jr-west-himi",
          "chubu-jr-west-johana",
          "chubu-jr-west-etsumi-north",
          "chubu-jr-west-takayama",
        ],
        stations: {
          "ishikawa-nototetsu": {
            start: "七尾",
            end: "和倉温泉",
          },
          "niigata-tokimeki-myoko": {
            start: "上越妙高",
            end: "直江津",
          },
          "chubu-jr-west-oito": {
            start: "中土",
            end: "糸魚川",
          },
          "chubu-jr-west-obama": {
            start: "敦賀",
            end: "青郷",
          },
        },
      },
    },
  },
};

const ticketsTemplate = (ticket) => {
  return `<div class="relative flex justify-between items-center py-2">
        <label for="${`${ticket.id}`}">${ticket.name}</label>
        <input type="radio" class="mr-4" id="${`${ticket.id}`}" name="tickets">
      </div>`;
};

const ticketsPrefectureTemplate = (prefecture) => {
  return `<details class="py-4" id="tickets-${prefecture.id}">
          <summary class="relative text-lg cursor-pointer">
            <span class="ml-2">${prefecture.name}</span>
          </summary>
        </details>`;
};

const allTickets = [
  allJRTickets,
  eastJRTickets,
  centralJRTickets,
  westJRTickets,
];
const ticketsRailwaysList = [];

for (const tickets of allTickets) {
  document.getElementById("tickets").innerHTML +=
    ticketsPrefectureTemplate(tickets);
  for (const key in tickets.tickets) {
    const ticket = tickets.tickets[key];
    const ticketElement = document.createElement("div");
    ticketElement.innerHTML = ticketsTemplate(ticket);
    document.getElementById("tickets-" + tickets.id).appendChild(ticketElement);
  }
}

document.getElementById("tickets-form").addEventListener("change", (event) => {
  if (event.target.id === "no-select") {
    const checkboxes = document.querySelectorAll(`input[type='checkbox']`);
    for (const checkbox of checkboxes) {
      checkbox.checked = false;
    }
    return;
  }
  const ticket = allTickets.find((ticket) => {
    return ticket.tickets[event.target.id];
  });
  if (ticket) {
    const checkboxes = document.querySelectorAll(`input[type='checkbox']`);
    for (const checkbox of checkboxes) {
      checkbox.checked = false;
    }
    const selectedTicket = ticket.tickets[event.target.id];
    if (selectedTicket.append) {
      const appendTicket = ticket.tickets[selectedTicket.append];
      for (const key in appendTicket.selects.company) {
        const company = appendTicket.selects.company[key];
        const companyElement = document.getElementById(company);
        if (companyElement) {
          const companyCheckboxes = companyElement.querySelectorAll(
            `input[type='checkbox']`
          );
          for (const checkbox of companyCheckboxes) {
            checkbox.checked = true;
          }
        }
      }
      for (const key in appendTicket.selects.railway) {
        const railway = appendTicket.selects.railway[key];
        const railwayElement = document.getElementById(railway);
        if (railwayElement) {
          const railwayCheckboxes = railwayElement.querySelectorAll(
            `input[type='checkbox']`
          );
          for (const checkbox of railwayCheckboxes) {
            checkbox.checked = true;
          }
        }
      }
      for (const key in appendTicket.selects.stations) {
        const station = appendTicket.selects.stations[key];
        const railwayElement = document.getElementById(key);
        if (railwayElement) {
          const stationsElement =
            railwayElement.querySelectorAll(`div div.relative`);
          let start = false;
          for (const stationElement of stationsElement) {
            const stationName =
              stationElement.querySelector("label").textContent;
            const stationInput = stationElement.querySelector("input");
            if (stationName === station.start) {
              start = true;
            }
            if (start) {
              stationInput.checked = true;
            }
            if (stationName === station.end) {
              break;
            }
          }
        }
      }
    }
    for (const key in selectedTicket.selects.company) {
      const company = selectedTicket.selects.company[key];
      const companyElement = document.getElementById(company);
      if (companyElement) {
        const companyCheckboxes = companyElement.querySelectorAll(
          `input[type='checkbox']`
        );
        for (const checkbox of companyCheckboxes) {
          checkbox.checked = true;
        }
      }
    }
    for (const key in selectedTicket.selects.railway) {
      const railway = selectedTicket.selects.railway[key];
      const railwayElement = document.getElementById(railway);
      if (railwayElement) {
        const railwayCheckboxes = railwayElement.querySelectorAll(
          `input[type='checkbox']`
        );
        for (const checkbox of railwayCheckboxes) {
          checkbox.checked = true;
        }
      }
    }
    for (const key in selectedTicket.selects.stations) {
      const station = selectedTicket.selects.stations[key];
      const railwayElement = document.getElementById(key);
      if (railwayElement) {
        const stationsElement =
          railwayElement.querySelectorAll(`div div.relative`);
        let start = false;
        for (const stationElement of stationsElement) {
          const stationName = stationElement.querySelector("label").textContent;
          const stationInput = stationElement.querySelector("input");
          if (stationName === station.start) {
            start = true;
          }
          if (start) {
            stationInput.checked = true;
          }
          if (stationName === station.end) {
            break;
          }
        }
      }
    }
  }
});
