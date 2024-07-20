const keihanShigaStations = {
  "keihan-ishiyama-sakamoto": [
    { name: "石山寺", yomi: "いしやまでら", id: "ishiyamadera" },
    { name: "唐橋前", yomi: "からはしまえ", id: "karahashimae" },
    { name: "京阪石山", yomi: "けいはんいしやま", id: "keihan-ishiyama" },
    { name: "粟津", yomi: "あわづ", id: "awazu" },
    { name: "瓦ヶ浜", yomi: "かわらがはま", id: "kawaragahama" },
    { name: "中ノ庄", yomi: "なかのしょう", id: "nakanosho" },
    { name: "膳所本町", yomi: "ぜぜほんまち", id: "zeze-hommachi" },
    { name: "錦", yomi: "にしき", id: "nishiki" },
    { name: "京阪膳所", yomi: "けいはんぜぜ", id: "keihan-zeze" },
    { name: "石場", yomi: "いしば", id: "ishiba" },
    { name: "島ノ関", yomi: "しまのせき", id: "shimanoseki" },
    { name: "びわ湖浜大津", yomi: "びわこはまおおつ", id: "biwako-hamaotsu" },
  ],
  "keihan-keishin": [
    { name: "御陵", yomi: "みささぎ", id: "misasagi" },
    { name: "京阪山科", yomi: "けいはんやましな", id: "keihan-yamashina" },
    { name: "四宮", yomi: "しのみや", id: "shinomiya" },
    { name: "追分", yomi: "おいわけ", id: "oiwake" },
    { name: "大谷", yomi: "おおたに", id: "otani" },
    { name: "上栄町", yomi: "かみさかえまち", id: "kami-sakae-machi" },
    { name: "びわ湖浜大津", yomi: "びわこはまおおつ", id: "biwako-hamaotsu" },
  ],
};

generateRailwayStations(keihanShigaStations, "keihan", "kinki");
