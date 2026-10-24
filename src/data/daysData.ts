export interface DayImage { src: string; w: number; h: number }
export interface DayChapter { id: string; label: string; title: string; text: string; images: DayImage[] }

export const JAWAI_DAYS: DayChapter[] = [
  {
    "id": "rooms",
    "label": "01 · THE STAY",
    "title": "TERRACOTTA, JAALI & LANTERNLIGHT",
    "text": "Handcrafted details in every room, from terracotta plates and carved jaali niches to private balconies facing the granite hills.",
    "images": [
      {
        "src": "/images/days/room-terracotta.jpg",
        "w": 1400,
        "h": 933
      },
      {
        "src": "/images/days/room-blue.jpg",
        "w": 1400,
        "h": 933
      },
      {
        "src": "/images/days/jaali-lantern.jpg",
        "w": 1188,
        "h": 1400
      },
      {
        "src": "/images/days/clothes-rack.jpg",
        "w": 827,
        "h": 1400
      },
      {
        "src": "/images/days/terrace-far.jpg",
        "w": 933,
        "h": 1400
      },
      {
        "src": "/images/days/terrace-bamboo.jpg",
        "w": 933,
        "h": 1400
      }
    ]
  },
  {
    "id": "pool",
    "label": "02 · THE POOL",
    "title": "FREEFORM BLUE HEART",
    "text": "Jawai's freeform designer pool, plus private plunge pools tucked behind bamboo screens.",
    "images": [
      {
        "src": "/images/days/pool-aerial.jpg",
        "w": 1400,
        "h": 1050
      },
      {
        "src": "/images/days/pool-villa.jpg",
        "w": 1400,
        "h": 1050
      },
      {
        "src": "/images/days/pool-bamboo.jpg",
        "w": 1400,
        "h": 933
      },
      {
        "src": "/images/days/pool-fruit.jpg",
        "w": 1400,
        "h": 1050
      }
    ]
  },
  {
    "id": "table",
    "label": "03 · THE TABLE",
    "title": "BONNET BREAKFASTS & DUSK PICNICS",
    "text": "Chai on the jeep bonnet, a spread laid out under open sky, and picnics as the light turns gold.",
    "images": [
      {
        "src": "/images/days/table-still-life.jpg",
        "w": 1400,
        "h": 1155
      },
      {
        "src": "/images/days/picnic-spread.jpg",
        "w": 1400,
        "h": 1260
      },
      {
        "src": "/images/days/picnic-table.jpg",
        "w": 1157,
        "h": 1400
      },
      {
        "src": "/images/days/bonnet-table.jpg",
        "w": 933,
        "h": 1400
      }
    ]
  },
  {
    "id": "farm",
    "label": "04 · THE FARM",
    "title": "PICKED BY HAND",
    "text": "Walk through the farm that feeds the kitchen, with fresh produce gathered the morning it is served.",
    "images": [
      {
        "src": "/images/days/farm-basket.jpg",
        "w": 933,
        "h": 1400
      },
      {
        "src": "/images/days/farm-mango.jpg",
        "w": 933,
        "h": 1400
      },
      {
        "src": "/images/days/farm-hands.jpg",
        "w": 933,
        "h": 1400
      },
      {
        "src": "/images/days/farm-walk.jpg",
        "w": 933,
        "h": 1400
      }
    ]
  },
  {
    "id": "safari",
    "label": "05 · THE SAFARI",
    "title": "INTO THE GRANITE HILLS",
    "text": "Open jeeps for dawn and dusk drives across Jawai's granite hills and lakeside grass.",
    "images": [
      {
        "src": "/images/days/safari-jeep.jpg",
        "w": 933,
        "h": 1400
      },
      {
        "src": "/images/days/safari-rock.jpg",
        "w": 1400,
        "h": 933
      },
      {
        "src": "/images/days/safari-lake.jpg",
        "w": 933,
        "h": 1400
      },
      {
        "src": "/images/days/safari-hills.jpg",
        "w": 1400,
        "h": 933
      },
      {
        "src": "/images/days/safari-track.jpg",
        "w": 1400,
        "h": 933
      },
      {
        "src": "/images/days/safari-tree.jpg",
        "w": 1400,
        "h": 933
      },
      {
        "src": "/images/days/safari-sunset.jpg",
        "w": 1400,
        "h": 933
      },
      {
        "src": "/images/days/safari-grass.jpg",
        "w": 1400,
        "h": 933
      }
    ]
  },
  {
    "id": "evenings",
    "label": "06 · EVENINGS",
    "title": "FAIRY LIGHTS & BONFIRE",
    "text": "Evenings under the trees with string lights, a crackling bonfire and open-air movie nights.",
    "images": [
      {
        "src": "/images/days/night-lights.jpg",
        "w": 933,
        "h": 1400
      },
      {
        "src": "/images/days/night-fire.jpg",
        "w": 933,
        "h": 1400
      },
      {
        "src": "/images/days/night-wide.jpg",
        "w": 1400,
        "h": 933
      },
      {
        "src": "/images/days/night-movie.jpg",
        "w": 1400,
        "h": 933
      },
      {
        "src": "/images/days/night-candles.jpg",
        "w": 1400,
        "h": 945
      }
    ]
  }
];
