/* ============================================================
   PAINTINGS — the ONLY file you edit to add or change art.
   ------------------------------------------------------------
   To add a new painting:
     1. Put the photo in the /images folder (e.g. sunrise.jpg)
     2. Copy one { ... } block below, paste it at the top of the list
     3. Fill in the fields. Keep the commas.

   Themes (used by the gallery filters). Reuse these spellings:
     "Judaic", "Landscapes", "Holidays"

   The "story" text is a short description of each painting. Replace
   any of it with Chanie's own words whenever you have them.
   "size" shows "Dimensions on request" until real canvas sizes are known.
   Leave "year" as "" if unknown — it will simply be hidden.
   ============================================================ */

const PAINTINGS = [
  {
    id: "shema",
    title: "Shema — Echad",
    theme: "Judaic",
    year: "2025",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/shema.jpg",
    featured: true,
    subtitle: "The pasuk we say from our first words to our last.",
    story: [
      "My latest painting, submitted for the \"Chassidus in Color\" art competition. It is based on the pasuk of Shema, which I have felt connected to since my youth — a pasuk we proclaim from the moment we can speak until our very last breath. A child's understanding is limited, but a child knows there is only one G-d, who created the heavens and earth and constantly keeps the world in existence.",
      "The word \"Shema\" means to listen. We meditate to understand Hashem, His greatness and His oneness with the world.",
      "In the painting you can see the word אחד: the Alef = 1, the one Hashem; the Ches = 8, the seven heavens and the earth; and the Daled = 4, the four corners of the world.",
      "In this painting I portray the Rebbe, who taught the Twelve Pesukim to the children who bring holiness into the world by proclaiming these words; the emotional moment of Yaakov and Yosef meeting after twenty-two long years, when Yaakov says the Shema; a soldier, in his physical and spiritual uniform, praying before going into the battlefield; children gathered around a baby the night before his bris to say Shema; and the close of the holy day of Yom Kippur at Neilah, when we proclaim Hashem as One.",
      "In times of trouble and in times of joy, we connect through the most important phrase the Jewish people have. The hostage Segev Kalfon, taken into Gaza, dreamed of the day he would be free to proclaim before the whole world, \"Hashem Echad\" — and he did.",
      "May we merit the ultimate redemption, when the world will be at peace and the Jewish nation will all be united as one, with Hashem Echad."
    ]
  },
  {
    id: "the-kosel",
    title: "The Kosel — The Western Wall",
    theme: "Judaic",
    year: "",
    medium: "Oil on canvas",
    size: "24 × 36 in",
    image: "images/the-kosel.jpg",
    featured: true,
    subtitle: "The Western Wall, in radiant color.",
    story: [
      "For close to 2,000 years this wall has remained standing, after the destruction of our holy Temple.",
      "The wall draws and welcomes people of all kinds to come pray for their needs and their wellbeing.",
      "My heart has been yearning to come visit — it has been too long. Meanwhile I have painted from my soul, and I invite you to feel drawn toward the wall and the texture of this painting.",
      "Let us unite together to pray for a world of everlasting peace, with the rebuilding of the third Beis Hamikdosh."
    ]
  },
  {
    id: "little-bird-of-silver",
    title: "The Little Bird of Silver",
    theme: "Judaic",
    year: "2023",
    medium: "Oil on canvas",
    size: "18 × 24 in",
    image: "images/little-bird-of-silver.jpg",
    featured: true,
    subtitle: "A silver bird, still singing amongst the vultures.",
    story: [
      "For weeks after October 7th, I couldn't express my feelings and emotions in my art. Then, suddenly, an idea came and I began to paint — and it sat on my easel, unfinished, for a few weeks. Last night I returned to it, and today I finished it.",
      "\"The little bird of silver — so delicate and rare, still chirps amongst the vultures, outshining all that's there. How long, how long it suffers; how long will it be — when will the eagle come, and set the little bird free!\"",
      "The Jewish nation is that silver bird, shining amongst our enemies. Even now, in the midst of war, we sing our song. These past months, the unity of our nation and the songs we sing together — bringing joy and hope to one another — inspired me to paint this.",
      "The music notes flowing from the beak are one of the songs being sung, \"Acheinu,\" composed by Abie Rotenberg: \"Acheinu kol beis Yisrael, hanesunim b'tzarah uvashivyah… HaMakom yeracheim aleihem, v'yotzi'eim mitzarah lirvachah, umei'afeilah l'orah, umishibud lig'ulah — hashta ba'agala uvizman kariv.\" (Our brothers, the whole house of Israel, who are in distress or captivity — may the Almighty have mercy on them and lead them from darkness to light, from bondage to redemption, swiftly and soon.)"
    ]
  },
  {
    id: "shamil",
    title: "Shamil",
    theme: "Judaic",
    year: "",
    medium: "Oil on canvas",
    size: "30 × 40 in",
    image: "images/shamil.jpg",
    featured: true,
    subtitle: "The niggun of a soul yearning to return home.",
    story: [
      "My new painting, submitted to the \"Chassidus in Color\" competition. On Simchas Torah of 1958, in the early morning hours, the Rebbe stood on a crate in the Shalash — the space between the two buildings of 770 and 788 — and taught a new niggun.",
      "The Rebbe began to speak, and to cry, as he told the story of Shamil: leader of the Caucasian army and a bitter enemy of the Russian czar. As Russia expanded, it sought to conquer the Caucasus Mountains. They deceived Shamil with the promise of a peace treaty — and in the end captured him and sent him into exile. Sitting in exile, he dreamed and yearned to be free, to ride his horse once more high in the mountains, and he composed this tune.",
      "The Rebbe then explained what we can learn from this: the neshama, the Jewish soul, is Above — free, united with G-dliness — and is sent down into this world, clothed in a physical body, forever yearning to return to where it came from.",
      "The Alter Rebbe writes in Tanya that the neshama descends into a body to learn Torah and do mitzvos; its mission is to find the sparks of G-dliness and prepare the world for redemption. The purpose of the creation of the world is the era of Moshiach.",
      "May the yearning we carry be fulfilled very soon, when we will experience the full glory of G-dliness with the final Redemption.",
      "A small detail: I mixed a little kos shel bracha — wine for a l'chaim — into the paint on the Smirnoff bottle."
    ]
  },
  {
    id: "simcha",
    title: "Simcha",
    theme: "Judaic",
    year: "2024",
    medium: "Oil on canvas",
    size: "18 × 24 in",
    image: "images/simcha.jpg",
    featured: true,
    subtitle: "When Adar enters, we increase in joy.",
    story: [
      "When the month of Adar enters, we increase in joy. This year, a leap year, we add even more simcha — a double month of Adar.",
      "\"Joy breaks all boundaries.\" Even in a time of distress or discomfort, when we are happy, things turn out for the better.",
      "Music brings joy deep inside; it touches our soul and lifts our spirits. As I listened to music, I created this with the flow — radiant oil paint laid on with a palette knife.",
      "May we all be blessed with inner happiness, and bring joy to all those around us — and very soon may we dance together to the Redemption, the greatest joy of all."
    ]
  },
  {
    id: "sound-of-the-shofar",
    title: "The Sound of the Shofar",
    theme: "Holidays",
    year: "2023",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/sound-of-the-shofar.jpg",
    featured: true,
    subtitle: "The shofar that will announce Moshiach.",
    story: [
      "And finally, it's here! The sound of the shofar awakens us to repent. As the new year arrives, we crown G-d as King.",
      "The shofar will sound to announce the arrival of Moshiach and the final Redemption — and we will sing the new song."
    ]
  },
  {
    id: "shabbos-around-the-world",
    title: "Shabbos Around the World",
    theme: "Judaic",
    year: "2022",
    medium: "Oil on canvas",
    size: "24 × 36 in",
    image: "images/shabbos-around-the-world.jpg",
    featured: true,
    subtitle: "Women and girls the world over, bringing in the light.",
    story: [
      "Each week on Friday, as the sky begins to show its first rays of beautiful color, women and girls light their candles — bringing in the peace and tranquility of Shabbos.",
      "This painting is based on photographs of real women and girls. I chose to portray different ages, from different communities around the world, with different styles of candles — yet all of us united together, bringing light into the world.",
      "May we merit to see the ultimate light of the Geulah, the Redemption, when we will live united forever, in peace and harmony."
    ]
  },
  {
    id: "yerushalayim",
    title: "Yerushalayim, Our Home",
    theme: "Judaic",
    year: "2016",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/yerushalayim.jpg",
    featured: true,
    subtitle: "The Beis Hamikdash hovering over everyday life.",
    story: [
      "A single canvas that holds a whole worldview: the Beis Hamikdash rests among the clouds while, in the green valley below, ordinary Jewish life carries on — a craftsman at his work, a chassid playing his violin, a figure wrapped in a tallis pouring out his heart on the hillside.",
      "Everything down below leans, quietly, toward the golden house above."
    ]
  },
  {
    id: "four-cups",
    title: "The Four Cups",
    theme: "Holidays",
    year: "2022",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/four-cups.jpg",
    featured: true,
    subtitle: "The four cups, the four exiles, and the cup of Eliyahu.",
    story: [
      "The four cups of wine we drink at the Seder represent the four expressions of redemption: \"I shall take you out…\", \"I shall rescue you…\", \"I shall redeem you…\", and \"I shall take you…\"",
      "In addition to the four cups, we add a fifth that we do not drink, called Kos Shel Eliyahu, representing the fifth expression of Redemption — \"I shall bring you…\" This fifth cup alludes to G-d bringing us back into our promised land, Eretz Yisroel.",
      "The fact that Kos Shel Eliyahu is not consumed shows that it is bound up with a level of divine service loftier than man's drinking of wine — because this cup is bound up with the final redemption, something that rises above what man can reach. The custom of pouring the cup for Eliyahu symbolizes the Jews' faith in the coming redemption; every Jew has this belief, for we are believers and the children of believers.",
      "This is why, specifically in the later generations — as the time of the final redemption draws closer and our longing for it grows stronger — the custom of pouring Kos Shel Eliyahu has become more widespread than in previous generations.",
      "Each of the four cups also represents one of the four exiles, which I painted in a rust, antique style: the Egyptian, the Babylonian, the Greek, and our current exile, the exile of Rome. In the fifth cup, Kos Shel Eliyahu, I painted the shape of Israel, drawn as the stem.",
      "With prayers that we celebrate this Pesach in the third Bais Hamikdash!"
    ]
  },
  {
    id: "cave-of-machpelah",
    title: "Me'aras HaMachpelah",
    theme: "Judaic",
    year: "2017",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/cave-of-machpelah.jpg",
    featured: true,
    subtitle: "The resting place of the Patriarchs and Matriarchs, in Chevron.",
    story: [
      "The great Herodian walls of the Cave of Machpelah in Chevron, rising over the worn stone steps where soldiers and pilgrims come and go in the strong Judean light.",
      "Painted on-site, in warm limestone tones."
    ]
  },
  {
    id: "the-kinus",
    title: "Kinnus Hashluchos",
    theme: "Judaic",
    year: "2025",
    medium: "Oil on canvas",
    size: "16 × 20 in",
    image: "images/the-kinus.jpg",
    featured: true,
    subtitle: "The shluchos gather outside 770 for their yearly picture.",
    story: [
      "This past weekend was the Kinnus Hashluchos. On Shabbos afternoon I was invited by Leah Namdar and Chana Lipsker to join them and a few other women — \"song birds,\" as Leah called us — to lead the Seder Niggunim.",
      "What a beautiful, uplifting experience it was: a packed hall of hundreds of shluchos and guests singing along through the last hour of Shabbos, carrying us into havdalah. The energy I received kept me on a high, and I felt it all week.",
      "Painted here, in the abstract, is part of the group of shluchos who gather outside 770 for their yearly picture.",
      "I'm sure the inspiration and energy these shluchos received over the weekend will carry them through the whole year."
    ]
  },
  {
    id: "avraham",
    title: "Avraham and the Stars",
    theme: "Judaic",
    year: "2024",
    medium: "Oil on canvas",
    size: "18 × 24 in",
    image: "images/avraham.jpg",
    featured: true,
    subtitle: "\"Look toward the heavens and count the stars.\"",
    story: [
      "This week's parsha is all about our father Avraham. Hashem blesses him: \"I will make your offspring as numerous as the dust of the earth — if a man can count the particles of dust in the world, then your offspring, too, could be counted.\"",
      "G-d took Avraham outside his tent and said, \"Look toward the heavens and count the stars — if you are able to count them.\" And He said to him, \"So shall your descendants be.\"",
      "The Jewish nation is spread all around the world, spreading Torah and mitzvos, shining bright like the stars in the darkness, filling the world with G-dliness."
    ]
  },
  {
    id: "torah-is-life",
    title: "Dance — Torah Is Life",
    theme: "Holidays",
    year: "2024",
    medium: "Oil on canvas",
    size: "18 × 24 in",
    image: "images/torah-is-life.jpg",
    featured: true,
    subtitle: "We dance with the Torah that teaches us the true way of life.",
    story: [
      "Simchas Torah is the holiday when we celebrate completing our annual cycle of reading the entire Torah — and then begin the cycle once again.",
      "We dance with the Torah scrolls that teach us the true way of life.",
      "May the joy of this holiday bring peace to our nation, the children of Israel."
    ]
  },
  {
    id: "walls-of-jerusalem",
    title: "The Walls of Jerusalem",
    theme: "Landscapes",
    year: "2017",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/walls-of-jerusalem.jpg",
    featured: true,
    subtitle: "Old City ramparts and date palms under a moving sky.",
    story: [
      "The honey-colored ramparts of the Old City, a line of date palms along the path, and two small figures walking in their shade.",
      "The kind of quiet corner of Jerusalem you could walk past a hundred times and never tire of."
    ]
  },
  {
    id: "water-carrier",
    title: "The Water Carrier",
    theme: "Judaic",
    year: "2016",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/water-carrier.jpg",
    featured: true,
    subtitle: "An old Jew carrying his pails down a cobbled hill.",
    story: [
      "Down a steep cobbled street of an old European village, a bearded Jew balances two pails of water on a wooden yoke — a humble figure, painted with great affection.",
      "The setting echoes the old-world lanes of England, where the artist grew up."
    ]
  },
  {
    id: "menorah-public",
    title: "The Public Menorah",
    theme: "Holidays",
    year: "2016",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/menorah-public.jpg",
    featured: true,
    subtitle: "A giant menorah kindled against the city night.",
    story: [
      "A towering public menorah blazes against a dark city skyline while a bundled-up crowd gathers below to watch the lights kindled.",
      "Chanukah taken out of the house and into the street — light where everyone can see it."
    ]
  },
  {
    id: "river-crossing",
    title: "Crossing the River",
    theme: "Judaic",
    year: "2014",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/river-crossing.jpg",
    featured: false,
    subtitle: "A small rowboat under a full moon.",
    story: [
      "Under a luminous full moon, a small wooden boat carries an elder and two young men across still, dark water toward the lights of a distant town.",
      "A night scene built almost entirely from blues and silver."
    ]
  },
  {
    id: "alter-rebbe",
    title: "The Alter Rebbe",
    theme: "Judaic",
    year: "2015",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/alter-rebbe.jpg",
    featured: false,
    subtitle: "A portrait in silver and shadow.",
    story: [
      "A close, contemplative portrait of the Alter Rebbe, painted almost entirely in greys and whites so that the face seems to emerge from the darkness by its own light."
    ]
  },
  {
    id: "rambam",
    title: "The Rambam",
    theme: "Judaic",
    year: "2015",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/rambam.jpg",
    featured: false,
    subtitle: "Physician, philosopher, and codifier of Torah law.",
    story: [
      "The Rambam — Maimonides — in a deep blue robe and white turban, an open volume before him and his books and medicines behind, against a warm desert-toned wall.",
      "A tribute to the sweep of his life as both doctor and Torah giant."
    ]
  },
  {
    id: "agam",
    title: "Agam",
    theme: "Judaic",
    year: "2025",
    medium: "Oil on canvas",
    size: "24 × 36 in",
    image: "images/agam.jpg",
    featured: false,
    subtitle: "Agam — a name that means a body of water.",
    story: [
      "Shabbos went out, and I had just watched the release of four hostages coming home. I prayed for the release and return of their friend Agam — I had sketched a drawing of her, and felt a strong connection to her.",
      "During those days of waiting it was the 28th of Teves, the birthday of Rebbetzin Chana, the mother of our Rebbe. The letters of her name are an acronym for the three mitzvos special to Jewish women: Challah, Niddah (the laws of family purity), and Hadlokas Haneiros (lighting the Shabbos candles). A few months earlier I had joined a mega challah bake in Crown Heights, where we all took challah and prayed for the hostages to come home safely.",
      "At that event, Meirav, the mother of Agam Berger, shared a message with us. The Hebrew name Agam means a body of water. Her mother asked that when women go to the Mikvah and immerse in the water, they please pray for Agam to merit a safe homecoming.",
      "We also heard that Agam, during her time in Gaza, refused to light a fire to cook for her captors, so as not to desecrate the holy Shabbos.",
      "In the merit of these young women, and of all Jewish women and girls, may we all dance with our tambourines straight out of this exile to the final Redemption."
    ]
  },
  {
    id: "mother-rachel",
    title: "Kever Rochel",
    theme: "Judaic",
    year: "2018",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/mother-rachel.jpg",
    featured: false,
    subtitle: "Mother Rachel's tomb on the road to Bethlehem.",
    story: [
      "The domed tomb of Rachel Imeinu beside the road, framed by a single tree and a field scattered with stones under a soft Judean sky.",
      "Mother Rachel, who weeps for her children and prays for their return."
    ]
  },
  {
    id: "choni",
    title: "Choni HaMe'agel",
    theme: "Judaic",
    year: "2016",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/choni.jpg",
    featured: false,
    subtitle: "The circle-maker who prayed for rain.",
    story: [
      "A lone robed figure stands in a dry desert landscape, having drawn a circle in the earth — Choni HaMe'agel, who declared he would not move until rain fell.",
      "A story of faith bold enough to argue with the heavens."
    ]
  },
  {
    id: "yona",
    title: "Yonah and the Great Fish",
    theme: "Judaic",
    year: "2017",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/yona.jpg",
    featured: false,
    subtitle: "A storm at sea, and the fish waiting below.",
    story: [
      "A ship pitched among white-capped waves under a turbulent sky, with the great fish rising from the deep — the story of Yonah, read every Yom Kippur afternoon.",
      "A painting about running from a mission, and being turned back toward it."
    ]
  },
  {
    id: "shabbos-eagle",
    title: "Shabbat 250",
    theme: "Judaic",
    year: "2026",
    medium: "Acrylic on canvas",
    size: "24 × 36 in",
    image: "images/shabbos-eagle.jpg",
    featured: true,
    subtitle: "Just one Shabbos, and we will all be free.",
    story: [
      "As part of the White House's Jewish American Heritage Month proclamation, the President designated the period from sundown Friday through nightfall Saturday as a national Shabbat — \"Shabbat 250\" — celebrating 250 years of America.",
      "There is a Jewish concept: \"Just one Shabbos and we will all be free.\" Fully observing a single Shabbat, with the right intention and dedication, could bring spiritual redemption and inner peace.",
      "I painted an eagle, which represents Moshiach. The American Eagle is the official national symbol of the United States, adopted in 1782 to represent freedom, strength, independence, and resilience. I used the red, blue and white of the American flag, with some added gold — America is known to Jewish people as the \"Goldene Medina,\" the Golden Land, a country free to practice our Jewish traditions. Silver was added for the honor of Shabbos.",
      "May this Shabbos bring much peace to our nation and the entire world."
    ]
  },
  {
    id: "kos-shel-bracha",
    title: "Kos Shel Bracha",
    theme: "Judaic",
    year: "",
    medium: "Charcoal on paper",
    size: "16 × 20 in",
    image: "images/kos-shel-bracha.jpg",
    featured: false,
    subtitle: "A special moment with the Rebbe.",
    story: [
      "I surprised my husband Mendy for his 50th birthday, celebrated on Shabbos, with a sketch of his special moment with the Rebbe — drawn from a photograph taken of him receiving kos shel bracha, the cup of blessing, from the Lubavitcher Rebbe.",
      "May the blessings continue to flow. Mazel Tov, and a wonderful year ahead!"
    ]
  },
  {
    id: "bibas-family",
    title: "The Bibas Family",
    theme: "Judaic",
    year: "2025",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/bibas-family.jpg",
    featured: false,
    subtitle: "Held in a heart.",
    story: [
      "A mother and her two little red-haired boys, cradled together inside the shape of a heart.",
      "Painted in memory of the Bibas family, and of a whole nation that held them in its prayers."
    ]
  },
  {
    id: "tzfat-walkway",
    title: "An Alley in Tzfat",
    theme: "Landscapes",
    year: "2017",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/tzfat-walkway.jpg",
    featured: false,
    subtitle: "A narrow stone lane in the mystical city.",
    story: [
      "A cobbled alley winds between old stone walls in Tzfat, past blue shutters and a spill of flowering vines, toward a sunlit archway at its end.",
      "The blues of Tzfat, the city of Kabbalah, everywhere you look."
    ]
  },
  {
    id: "prospect-park",
    title: "Prospect Park in Autumn",
    theme: "Landscapes",
    year: "2017",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/prospect-park.jpg",
    featured: false,
    subtitle: "A Brooklyn afternoon in red and gold.",
    story: [
      "A curving park road lined with trees turning red and amber under a big, brushy autumn sky — Prospect Park, close to home in Brooklyn.",
      "Proof that a scene doesn't have to be far away to be worth painting."
    ]
  },
  {
    id: "water-and-tree",
    title: "By the Water's Edge",
    theme: "Landscapes",
    year: "2015",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/water-and-tree.jpg",
    featured: false,
    subtitle: "A calm lake framed by red blossoms.",
    story: [
      "A still blue lake under a towering summer cloud, framed by leaning trees and a foreground bright with red flowers.",
      "A pure landscape — painted simply for the peace of it."
    ]
  },
  {
    id: "the-leaf",
    title: "Autumn Leaves",
    theme: "Landscapes",
    year: "2016",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/the-leaf.jpg",
    featured: false,
    subtitle: "A close study of fallen color.",
    story: [
      "A close-up carpet of fallen leaves — crimson, amber, gold and green — layered and overlapping so the whole canvas glows.",
      "An exercise in seeing how much color hides in a single handful of autumn."
    ]
  },
  {
    id: "shofar",
    title: "The Shofar's Call",
    theme: "Holidays",
    year: "2014",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/shofar.jpg",
    featured: false,
    subtitle: "A cry that tears open the heavens.",
    story: [
      "An elder wrapped in a tallis lifts the shofar, and from its mouth a band of fire and color streams up into a grey, wind-swept sky.",
      "The wordless cry of Rosh Hashanah, made visible."
    ]
  },
  {
    id: "lag-baomer",
    title: "Lag BaOmer Bonfire",
    theme: "Holidays",
    year: "2014",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/lag-baomer.jpg",
    featured: false,
    subtitle: "Dancing circles around the fire.",
    story: [
      "A great bonfire leaps into the night while men and children join hands and circle it, dancing — the joy of Lag BaOmer.",
      "Firelight, movement, and the warmth of a whole community together."
    ]
  },
  {
    id: "tu-bshvat",
    title: "Tu BiShvat",
    theme: "Holidays",
    year: "2013",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/tu-bshvat.jpg",
    featured: false,
    subtitle: "A tree of many fruits, shaped like a person.",
    story: [
      "A single tree stands in an open green field, its trunk suggesting a human figure and its branches heavy with every kind of fruit — apples, grapes, figs and more.",
      "\"For man is a tree of the field\" — the New Year of the Trees."
    ]
  },
  {
    id: "the-voyage",
    title: "The Voyage",
    theme: "Judaic",
    year: "2015",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/the-voyage.jpg",
    featured: false,
    subtitle: "A sage and his students under full sail.",
    story: [
      "A wooden sailing boat glides across calm blue water, its white sails full, carrying an elder and three young students toward a green far shore."
    ]
  },
  {
    id: "in-the-field",
    title: "In the Field",
    theme: "Judaic",
    year: "2015",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/in-the-field.jpg",
    featured: false,
    subtitle: "A sage writing above, a woman gathering below.",
    story: [
      "Across a wide green field, a woman in a simple brown dress holds a bundle of gathered greens, while above, among the clouds, an elder sits writing with a quill."
    ]
  }
];
