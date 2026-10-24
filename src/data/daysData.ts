export interface DayImage { src: string; w: number; h: number }
export interface DayChapter { id: string; label: string; title: string; text: string; images: DayImage[] }

export const JAWAI_DAYS: DayChapter[] = [
  {
    "id": "rooms",
    "label": "01 · THE ROOMS",
    "title": "TERRACOTTA, JAALI & LANTERNLIGHT",
    "text": "Handcrafted details in every room, from terracotta plates and carved jaali niches to brass lanterns and blue-washed walls.",
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
      }
    ]
  },
  {
    "id": "terraces",
    "label": "02 · THE TERRACES",
    "title": "BALCONIES FACING THE GRANITE",
    "text": "Private balconies that open to green fields and rock-strewn hills, with long views to catch the light fading.",
    "images": [
      {
        "src": "/images/days/terrace-far.jpg",
        "w": 933,
        "h": 1400
      },
      {
        "src": "/images/days/terrace-bamboo.jpg",
        "w": 933,
        "h": 1400
      },
      {
        "src": "/images/days/terrace-evening.jpg",
        "w": 933,
        "h": 1400
      }
    ]
  },
  {
    "id": "safari",
    "label": "03 · THE SAFARI",
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
    "id": "table",
    "label": "04 · THE TABLE",
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
  }
];
