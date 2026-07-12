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
    id: "leibel-groner",
    title: "Rabbi Leibel Groner",
    theme: "Sketches",
    year: "2020",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/leibel-groner.jpg",
    featured: false,
    subtitle: "The man who stood beside the Rebbe.",
    story: [
      "Rabbi Leibel Groner was known to many as the man who stood beside the Rebbe, serving as his secretary throughout the years of leadership. That is how I knew him as a child — until I came to know him more personally when I moved to Crown Heights from London, after my wedding 22 years ago.",
      "I had the honor of hosting Rabbi Groner in my home for my birthday farbrengens. The stories he shared and the memories he told of the Rebbe inspired us and kept our connection strong.",
      "He appreciated and complimented my art. Whenever he saw my husband, he would ask which painting I was working on, and took real interest when my husband showed him. The last message I received from him was on Shushan Purim, thanking me for the Mishloach Manos I had left outside his door and telling me how nice my picture was — a copy of my painting of the Rebbe coming out of 770.",
      "He passed away tragically from this terrible virus. We hope to farbreng together once again very soon, with the coming of Moshiach."
    ]
  },
  {
    id: "chaim-bentzion-raskin",
    title: "Reb Chaim Bentzion Raskin",
    theme: "Sketches",
    year: "2021",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/chaim-bentzion-raskin.jpg",
    featured: false,
    subtitle: "The chossid near Moscow who poured out tears for his children's future.",
    story: [
      "The Frierdiker Rebbe once mentioned in a sicha: \"There is a Jew (Reb Chaim Bentzion Raskin) who lives near Moscow. Every morning he wakes early, at 4am, to learn Torah; and before that he says Tehillim and pours out tears like water. And the reason for his crying? He is begging mercy of G-d Almighty that his children and grandchildren should walk in the ways of the Torah.\"",
      "This special chossid was my great-great-grandfather. He lived at a time when it was hard to keep Torah and mitzvos, in the era of the Haskalah movement — and yet we see the results of his prayers. Today he has hundreds, perhaps thousands, of descendants around the world, many of them shluchim of the Rebbe, spreading Yiddishkeit.",
      "Today, the 7th of Cheshvan, was his 82nd yahrtzeit. This morning I began to draw this sketch as I watched over my newborn granddaughter — his great-great-great-granddaughter.",
      "May we continue to bring him true chassidishe nachas, and may we very soon — together with all my cousins around the world — merit to meet our illustrious Zaida, with the coming of Moshiach."
    ]
  },
  {
    id: "rabbi-schwei",
    title: "Rabbi Schwei",
    theme: "Sketches",
    year: "2020",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/rabbi-schwei.jpg",
    featured: false,
    subtitle: "A Rav on the Beis Din — and, to me, my personal Rav.",
    story: [
      "Rabbi Schwei was a Rav, part of the Beis Din of Crown Heights. But to me he was my personal Rav. If it was after hours at his office, I would call him at home — and not only was he always available to answer my questions, but he had such sensitivity, compassion, and patience to listen to every detail.",
      "At first I thought I was the only one calling him at home so late — sometimes almost at midnight. But after his passing, I heard other women say the very same. He was always there for us, and we miss him so much down here.",
      "He also took an interest in my artwork, whenever I would send him a print with Mishloach Manos on Purim.",
      "I'm sure Rabbi Schwei is now sitting at the Beis Din with the greatest Rabbonim in Heaven, demanding that Hashem send us the Geulah immediately — it's about time!"
    ]
  },
  {
    id: "dayen-refson",
    title: "Dayan Refson — Feter Yehuda",
    theme: "Sketches",
    year: "2021",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/dayen-refson.jpg",
    featured: false,
    subtitle: "My uncle — always a happy, smiling hello.",
    story: [
      "My uncle, Dayan Refson — whom I called Feter Yehuda — passed away a year ago, suddenly, a shock to us all.",
      "On his first yahrtzeit, this past Thursday the 23rd of Adar, I began to sketch this picture. It brought back my childhood memories of when the Refson family would travel to London from Leeds and stay at my grandparents' home — my uncle's happy, smiling hellos, and the way he would sit and learn from a sefer.",
      "At the zoom event, a virtual gathering of family and friends, I learned so much more about how special he truly was."
    ]
  },
  {
    id: "rebbe-lag-baomer",
    title: "The Rebbe — Lag BaOmer",
    theme: "Sketches",
    year: "2021",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/rebbe-lag-baomer.jpg",
    featured: false,
    subtitle: "A day of Jewish pride and unity.",
    story: [
      "Lag BaOmer has always been a joyful holiday for me. From my early childhood in London, we would rally outside Lubavitch House and parade through the streets of my neighborhood — always a day of Jewish pride and unity.",
      "Some years we would gather in the afternoon to watch the live rally and parade from Crown Heights over a satellite hookup — watching the Rebbe come out to the song of \"Ani Ma'amin,\" and then joining children around the world in reciting the twelve Torah pesukim. I never experienced Lag BaOmer in Crown Heights with the Rebbe, but I've taken part in many years of rallies and parades here since I moved.",
      "This year we celebrated joy amid mourning — so many lives lost after singing that heartfelt song: \"Ani Ma'amin — I believe with complete faith in the coming of Moshiach; and though he may tarry, still I wait for him each day.\"",
      "May we merit, very soon, the coming of Moshiach and the Redemption."
    ]
  },
  {
    id: "yudi-dukes",
    title: "Rabbi Yudi Dukes, OBM",
    theme: "Sketches",
    year: "2022",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/yudi-dukes.jpg",
    featured: false,
    subtitle: "Yudi, smiling.",
    story: [
      "As the yahrtzeit of Rabbi Dukes was approaching, my friend @sarahdukesmusic asked people to take the time to write up an interaction or memory they had with her husband.",
      "I didn't know Yudi, or much about him, until March 2020 — I first saw him on Purim, driving his children around Crown Heights to deliver mishloach manos to their friends.",
      "Yudi contracted Covid and was in the hospital for months; it was an extremely challenging year for him, for his wife, who stood devotedly at his side with loving care, and for their children. Even in his most difficult moments, Yudi continued his spiritual work from his hospital bed — recording words of Torah, smiling as he encouraged his medical staff to give charity and do other good deeds. He left an everlasting impression on people all around the world.",
      "Tonight, one year since his passing, I finished this sketch — \"Yudi smiling.\" May Sara and her children be reunited with their beloved husband and father, to celebrate together with the coming of Moshiach."
    ]
  },
  {
    id: "bobba-bluma",
    title: "Bobba Bluma",
    theme: "Sketches",
    year: "2022",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/bobba-bluma.jpg",
    featured: false,
    subtitle: "A flower that blossomed again after the war.",
    story: [
      "My grandmother was an Auschwitz survivor, who lived through the horrors of the Holocaust.",
      "Her name, Bluma — Yiddish for flower — blossomed once again after the war, when she came to England and started a family together with my grandfather, raising their children in a chassidishe environment of Torah and mitzvos.",
      "It was a packed house the evening I entertained the women with my art, through story and song."
    ]
  },
  {
    id: "michoel-katzenelenbogen",
    title: "Reb Michoel Katzenelenbogen, Hy”d",
    theme: "Sketches",
    year: "2023",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/michoel-katzenelenbogen.jpg",
    featured: false,
    subtitle: "My great-grandfather, who gave his life for his faith.",
    story: [
      "My great-grandfather, Reb Michoel Katzenelenbogen, was the husband of Bobba Sara — known to many as Mumma, Aunt Sara — who helped many leave Russia, including Rebbetzin Chana.",
      "I never met my Zaida Michoel, but I've heard he was a true chossid of the Rebbe Rashab and the previous Chabad Rebbe, keeping his connection strong. He spent all his time davening and learning Chassidus.",
      "On October 3rd, 1937, he was arrested at his home in Staraya Russa, accused of being a religious activist. On November 19th he was shot and buried in a mass grave near Leningrad.",
      "He left behind a family that today numbers many chassidim around the world. Hashem yikom damo."
    ]
  },
  {
    id: "shlomo-mansour",
    title: "Shlomo Mansour, Hy”d",
    theme: "Sketches",
    year: "2023",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/shlomo-mansour.jpg",
    featured: false,
    subtitle: "His name, Shlomo, means peace.",
    story: [
      "A couple of weeks ago I heard of an initiative by two artists, @art_by_ariela and @artspark4, calling on other artists to each sketch one of the hostages still held in Gaza.",
      "Shlomo Mansour was an 85-year-old man, originally from Iraq, taken captive from his kibbutz on October 7th. As I sketched, I connected with him and prayed for his safe return home to his wife, children, and grandchildren. I tried to bring out his beautiful, warm smile. His name, Shlomo, means peace — may he return, together with all the hostages, in peace.",
      "It was later confirmed that Shlomo was murdered on October 7th. Hashem yikom damo — may his memory be a blessing."
    ]
  },
  {
    id: "baila-stillerman",
    title: "Bobba Baila Stillerman, a”h",
    theme: "Sketches",
    year: "2024",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/baila-stillerman.jpg",
    featured: false,
    subtitle: "My dear grandmother — one of the roots of who I am.",
    story: [
      "This Shabbos was the shloshim — thirty days from the passing of my dear grandmother, Baila Stillerman, daughter of Reb Betzalel and Chaya Wilshansky.",
      "She passed away on Friday, which was Tu BiShevat here in New York — the birthday of the trees. My grandmother was one of the roots of who I am today. Born in communist Russia into a family of Chassidim of the previous Chabad Rebbe, they also had a close connection to the Rebbe's parents, Reb Levik and Rebbetzin Chana.",
      "She married my grandfather, Shimon Stillerman, and together with her parents and family moved to Sydney, Australia, where they raised their children with a strong passion for Torah and Yiddishkeit, infused with chassidishkeit. I have fond memories of her visits — to London, where I grew up, and later to New York.",
      "Last year I visited her in Melbourne, where she lived her later years, and I'm so glad I got to spend that quality time with her. I miss you, Bobba, and I hope to see you very soon again, with the coming of Moshiach."
    ]
  },
  {
    id: "moshe-katzenelbogen",
    title: "Fete Moshe Katzenelbogen, a”h",
    theme: "Sketches",
    year: "2024",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/moshe-katzenelbogen.jpg",
    featured: false,
    subtitle: "My great-uncle — always happy and smiling, through everything.",
    story: [
      "Today, the 8th of Elul, was the tenth yahrtzeit of my great-uncle Moshe Katzenelbogen, younger brother to my grandfather.",
      "Fete (uncle in Yiddish) Moshe was very dear to me — he lived near my childhood home in London, and I spent many happy hours at his house with his wife, Aunty Zelda, and their beautiful children. He would so often offer, in his strong Russian accent, \"You want a cup of tea?\"",
      "Born and raised in communist Russia, he was a true Chabad Chossid, with real self-sacrifice in keeping Torah and mitzvos. He spent many years in the Soviet prisons and labor camps for his work helping fellow Jews, until he finally received a visa to leave Russia in 1971.",
      "Though he lived through so much suffering, I remember him always happy and smiling. He built a warm, beautiful home full of Torah and Yiddishkeit. I'm sure he is smiling now, seeing the chassidishe nachas his children bring him. May we meet again very soon, with the coming of Moshiach.",
      "A sketch I drew today, based on a picture from my wedding album."
    ]
  },
  {
    id: "agam-berger",
    title: "Agam Berger",
    theme: "Sketches",
    year: "2024",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/agam-berger.jpg",
    featured: false,
    subtitle: "A charcoal portrait of Agam Berger — home now, after so many prayers.",
    story: [
      "Last night I joined the inspirational unity Challah bake in my community — held in the merit of bringing blessings to the land of Israel and the return of all the hostages, and to strengthen us in our mitzvos, especially those of women: challah, the laws of family purity, and lighting Shabbos candles.",
      "We heard from the mother of Agam Berger, who left us with a beautiful message. Her family has taken on a project, \"Agam for Agam\" — Agam means a body of water — asking women to take on this special mitzvah in the merit of her daughter's return, together with all the hostages. She described Agam as a girl of strong faith in G-d.",
      "As I drew this sketch, I saw the special soul she is. May she be reunited with her family, and may we hear great news very soon.",
      "Thank G-d, after all the prayers, Agam has since been released."
    ]
  },
  {
    id: "moshe-kotlarsky",
    title: "Rabbi Moshe Kotlarsky, OBM",
    theme: "Sketches",
    year: "2024",
    medium: "Charcoal on Bristol paper",
    size: "11 × 14 in",
    image: "images/moshe-kotlarsky.jpg",
    featured: false,
    subtitle: "Drawn as Shluchim gather in Crown Heights for their yearly Kinus.",
    story: [
      "This week I chose to draw Rabbi Moshe Kotlarsky, OBM, as Shluchim from around the world come to Crown Heights for their yearly Conference."
    ]
  },
  {
    id: "nimrod-cohen",
    title: "Nimrod Cohen",
    theme: "Sketches",
    year: "",
    medium: "Charcoal on paper",
    size: "Dimensions on request",
    image: "images/nimrod-cohen.jpg",
    featured: false,
    subtitle: "A charcoal portrait of Nimrod, held hostage in Gaza — now home.",
    story: [
      "Hearing the strength of Viki, mother of Nimrod Cohen — one of the hostages taken into Gaza — I sketched a portrait of her son.",
      "In her message she shared that her son has a special soul: that before he was born he was told what his mission in this world would be, and he accepted it. May that mission be over very soon, so that she may be reunited with Nimrod — together with all the hostages coming home.",
      "With all the prayers, thank G-d, Nimrod has since been released."
    ]
  },
  {
    id: "gita-gansburg",
    title: "Mrs. Gita Gansburg, a”h",
    theme: "Sketches",
    year: "2024",
    medium: "Charcoal on Bristol paper",
    size: "11 × 14 in",
    image: "images/gita-gansburg.jpg",
    featured: false,
    subtitle: "Savta — dorm mother of Machon Chana for 38 years.",
    story: [
      "It was only after I married my husband that I came to know his grandmother, whom we called Savta.",
      "In those years I saw what a special woman she was — the bond she shared with her grandchildren and great-grandchildren, and her devotion as the dorm mother of Machon Chana, her spiritual children, for 38 years.",
      "When the Rebbe visited the dorm on the evening of the Pesach Seder, he thanked her for raising his daughters."
    ]
  },
  {
    id: "rebbetzin-channah",
    title: "Rebbetzin Chana",
    theme: "Rebbe & Rebbetzin",
    year: "",
    medium: "Oil on canvas",
    size: "18 × 24 in",
    image: "images/rebbetzin-chana-v2.jpg",
    featured: false,
    subtitle: "Rebbetzin Chana, mother of the Lubavitcher Rebbe.",
    story: [
      "The 28th of Teves is the birthday of Rebbetzin Chana, the mother of the Lubavitcher Rebbe.",
      "I worked on this painting during the week of the Rebbetzin's yahrzeit, Vov Tishrei, while singing part of my recording of the song \"Mother of Royalty.\"",
      "I hope it brings much chassidishe nachas to the Rebbetzin, whom I am named after — and may we meet her very soon, with the coming of Moshiach."
    ]
  },
  {
    id: "the-city-my-heart",
    title: "The City My Heart",
    theme: "Judaic",
    year: "",
    medium: "Acrylic on canvas",
    size: "16 × 20 in",
    image: "images/the-city-my-heart.jpg",
    featured: false,
    subtitle: "A quiet lane in Yerushalayim of Gold.",
    story: [
      "The city my heart is in is Yerushalayim of Gold. My walk through the light-colored stones — each step telling a story of our ancient history.",
      "Green leaves and pink flowers blossom above, and the blue sky brings the hope my soul yearns for: the return of our holy Temple.",
      "I began this painting a couple of months ago, shortly after my trip to Israel, and finally had the chance to finish it."
    ]
  },
  {
    id: "miriam-at-the-sea",
    title: "Miriam at the Sea",
    theme: "Judaic",
    year: "2017",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/miriam-at-the-sea.jpg",
    featured: true,
    subtitle: "The women's song and dance at the splitting of the sea.",
    story: [
      "In this week's parsha, B'shalach, we read of one of the greatest miracles in history — the splitting of the sea.",
      "Moshe sang together with the men, and then Miriam the prophetess took the cymbals in her hand and led the women in dance and song.",
      "In the merit of her prophecy, and in the merit of the Jewish women, we were redeemed from Egypt.",
      "It will be in the merit of us women that we will be redeemed from this long exile. Hashem will once again show us wonders and miracles — the sea will split again, and we will all sing together the new song of Redemption. May it be today!"
    ]
  },
  {
    id: "kotel-in-color",
    title: "The Kosel in Color",
    theme: "Judaic",
    year: "2018",
    medium: "Oil on canvas",
    size: "Dimensions on request",
    image: "images/kotel-in-color.jpg",
    featured: true,
    subtitle: "Every stone its own color, every color its own prayer.",
    story: [
      "The last remaining wall of the Beis Hamikdash — painted not in plain stone, but in every color I feel when I stand before it.",
      "Each stone is a different shade, because every soul who comes to pour out their heart brings a different prayer, a different tear, a different hope. Together they form one wall that has stood through every exile.",
      "At its base, Jews of every kind stand side by side, close enough to touch the ancient stones — the place where, our Sages teach, the Shechinah has never departed."
    ]
  },
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
    id: "seven-species",
    title: "The Seven Species",
    theme: "Holidays",
    year: "2026",
    medium: "Acrylic on canvas",
    size: "18 × 24 in",
    image: "images/seven-blessings.jpg",
    featured: true,
    subtitle: "The land of Israel, blessed with the seven species.",
    story: [
      "In honor of Tu BiShvat, I painted the land of Israel filled with the seven special species with which it is blessed.",
      "\"A land of wheat and barley, of vines and figs and pomegranates; a land of oil-producing olives, and honey from dates.\""
    ]
  },
  {
    id: "the-little-bird",
    title: "The Little Bird is Calling",
    theme: "Judaic",
    year: "2013",
    medium: "Oil on canvas",
    size: "30 × 40 in",
    image: "images/the-little-bird.jpg",
    featured: true,
    subtitle: "The bird is Yisrael; the eagle is Moshiach.",
    story: [
      "Who doesn't know the song \"The Little Bird is Calling\"? It was one of my favorites growing up — we sang it around camp bonfires and at farbrengens. This painting is based on it.",
      "\"The little bird is calling, it wishes to return; the little bird is wounded, it cannot fly but yearn. It's captured by the vultures, crying bitterly — oh, to see my nest again; oh, to be redeemed!\"",
      "\"The little bird of silver, so delicate and rare, still chirps amongst the vultures, outshining all that's there. How long, how long it suffers; how long will it be — when will come the eagle, and set the little bird free.\"",
      "\"The little bird is Yisrael; the vultures are our foes. The painful wound is Golus, which we all feel and know. The nest is Yerushalayim, where we yearn to be once more — and the eagle is Moshiach, whom we are waiting for.\""
    ]
  },
  {
    id: "enough-tears",
    title: "Enough Tears",
    theme: "Judaic",
    year: "2021",
    medium: "Oil on canvas",
    size: "18 × 24 in",
    image: "images/enough-tears.jpg",
    featured: true,
    subtitle: "Hashem's cup of tears — how deep, and when will it fill?",
    story: [
      "As an artist, I felt the need to pour my feelings onto canvas after so much recent tragedy. Seeing the footage from the terrible disaster in Surfside, Florida, my mind couldn't rest — thinking of all those trapped, of the families who suffered such loss, and of all the pain the Jewish nation as a whole has known.",
      "Through the tears, I found myself thinking of the song \"Daddy Dear\" by Mordechai Ben David — the child who asks whether it's true that in Heaven there is a cup that fills a little more each day; that Hashem keeps it close by, and fills it with His tears each time that we cry.",
      "\"Just how deep is this cup — tell me, when will it fill? Don't you think it is time that the sun forever shine?\" And so we ask Him together: Father dear, do You hear our worries, our fears? Will Your eyes ever dry — is Your cup filled with tears?",
      "I believe the cup is full and spilling over. Hashem, please comfort us, and send us the Geulah."
    ]
  },
  {
    id: "mizmor-ledovid",
    title: "Mizmor LeDovid",
    theme: "Judaic",
    year: "2021",
    medium: "Oil on canvas",
    size: "24 × 36 in",
    image: "images/mizmor-ledovid.jpg",
    featured: true,
    subtitle: "King David's harp, and the song of the Psalms.",
    story: [
      "An idea that lived in my mind for many months. I finally began to paint it in the week leading up to Shavuos — the day connected to King David, who passed away on that very day, when the Jewish nation stood together at Mount Sinai and became one with G-d.",
      "I've always loved the stories of King David, and felt for his many years of suffering. As a young man he spent long hours in the fields, tending his father Yishai's flocks. In his heart burned an ardent love for G-d and His people, which he poured into the Psalms he composed and the harp he played.",
      "For generations, the power of Tehillim has brought comfort in times of need, and song and thanks in times of joy. The music I painted is a melody from Tehillim — if you can read music, try to play along. A hint: \"I lift my eyes to the mountains — from where will my help come?\" (Psalm 121).",
      "David, King of Israel, lives on forever."
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
