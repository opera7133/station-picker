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
          "shikoku-jr-shikoku",
          "kyushu-jr-kyushu",
        ],
        railway: [],
        stations: {},
      },
    },
  },
};

const kantoJRTickets = {
  id: "jr-kanto",
  name: "JR東日本 企画券",
  tickets: {
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
          "kanto-jr-east-keihin-tohoku": {
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
          "kanto-jr-east-keihin-tohoku",
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
  },
};

const tokaiJRTickets = {
  id: "jr-tokai",
  name: "JR東海 企画券",
  tickets: {
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

const allTickets = [allJRTickets, kantoJRTickets, tokaiJRTickets];

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
