User.create(first_name:"Bella", last_name:"Machado", username:"icantisa", picture:"https://i.pinimg.com/564x/90/f5/64/90f564bec315da6f19b482e5e69b96d8.jpg", password:"cool")
User.create(first_name:"Rafia", last_name:"KJ", username:"rafiakj", picture:"https://i.pinimg.com/564x/56/d8/6a/56d86af0601bc480392d24d65c8ae881.jpg", password:"cool")
User.create(first_name:"Ian", last_name:"GH", username:"ianruns", picture:"https://i.pinimg.com/564x/de/92/68/de9268ee7e2988a6bc33bfbcee9ccd1f.jpg", password:"cool")


#Books seeds

Book.create(title:"Under the Whispering Door", author:"T.J. Klune", description:"When a reaper comes to collect Wallace from his own funeral, Wallace begins to suspect he might be dead.")
Book.create(title:"Magic Lessons", author:"Alice Hoffman",description:"When Maria is abandoned by the man who has declared his love for her, she follows him to Salem, Massachusetts. Here she invokes the curse that will haunt her family. And it’s here that she learns the rules of magic and the lesson that she will carry with her for the rest of her life. Love is the only thing that matters.")
Book.create(title:"The Farm", author:"Joanne Ramos", description:"Jane, an immigrant from the Philippines and a struggling single mother, is thrilled to make it through the highly competitive Host selection process at the Farm. But now pregnant, fragile, consumed with worry for her own young daughter's well-being, Jane grows desperate to reconnect with her life outside. Yet she cannot leave the Farm or she will lose the life-changing fee she'll receive on delivery—or worse.")
Book.create(title:"The School for Good Mothers", author:"Jessamine Chan", description:"This propulsive, witty page-turner explores the perils of “perfect” upper-middle-class parenting, the violence enacted upon women by the state and each other, and the boundless love a mother has for her daughter.")
Book.create(title:"Amen Maxine", author:"Faith Gardner", description:"This domestic suspense novel set in a near-future dystopia asks, who do you trust more—your mind, your man, or your machine?")
Book.create(title:"Love, Lists, and Fancy Ships", author:"Sarah Grunder Ruiz", description:"For the last year, yacht stewardess Jo Walker has been attempting to complete a bucket list of thirty things she wants to accomplish by her birthday. Jo has almost everything she's ever wanted, including a condo on the beach (though she's the youngest resident by thirty years) and an exciting job (albeit below deck) that lets her travel the world.Jo is on track until a family tragedy turns her life upside down, and the list falls by the wayside. But when her two nieces show up unannounced with plans to stay the summer, they discover her list and insist on helping Jo finish it. Though the remaining eight items (which include running a marathon, visiting ten countries, and sleeping in a castle) seem impossible to complete in twelve weeks, Jo takes on the challenge.When she summons the courage to complete item number five--kiss a stranger--and meets Alex Hayes, all bets are off. As her feelings for Alex intensify and Jo's inability to confront difficult emotions about her family complicates her relationships, she must learn to quit playing it safe with her heart before she loses what matters most.")
Book.create(title:"What If? Serious Scientific Answers to Absurd Hypothetical Questions", author:"Randall Munroe", description:"In pursuit of answers, Munroe runs computer simulations, pores over stacks of declassified military research memos, solves differential equations, and consults with nuclear reactor operators. His responses are masterpieces of clarity and hilarity, studded with memorable cartoons and infographics. They often predict the complete annihilation of humankind, or at least a really big explosion. Far more than a book for geeks, WHAT IF: Serious Scientific Answers to Absurd Hypothetical Questions explains the laws of science in operation in a way that every intelligent reader will enjoy and feel much the smarter for having read.")
Book.create(title:"Maus", author:"Art Spiegelman", description:"Maus is a haunting tale within a tale, weaving the author’s account of his tortured relationship with his aging father into an astonishing retelling of one of history's most unspeakable tragedies. It is an unforgettable story of survival and a disarming look at the legacy of trauma.")
Book.create(title:"Permanent Record", author:"Mary H.K. Choi", description:"After a year of college, Pablo is working at his local twenty-four-hour deli, selling overpriced snacks to brownstone yuppies. He’s dodging calls from the student loan office and he has no idea what his next move is.Leanna Smart’s life so far has been nothing but success. Age eight: Disney Mouseketeer; Age fifteen: first #1 single on the US pop chart; Age seventeen, *tenth* #1 single; and now, at Age nineteen…life is a queasy blur of private planes, weird hotel rooms, and strangers asking for selfies on the street. When Leanna and Pab randomly meet at 4:00 a.m. in the middle of a snowstorm in Brooklyn, they both know they can’t be together forever. So, they keep things on the down-low and off Instagram for as long as they can. But it takes about three seconds before the world finds out")
Book.create(title:"Getting Clean With Stevie Green", author:"Swan Huntley", description:"A winsome, fast-paced read, Getting Clean With Stevie Green is about coming to terms with who you are, resolving the pain of your past, and accepting the truth of your life in all its messy glory.")
Book.create(title:"Out", author:"Natsuo Kirino", description:"The complex yet riveting narrative seamlessly combines a convincing glimpse into the grimy world of Japan's yakuza with a brilliant portrayal of the psychology of a violent crime and the ensuing game of cat-and-mouse between seasoned detectives and a group of determined but inexperienced criminals. Kirino has mastered a Thelma and Louise kind of graveyard humor that illuminates her stunning evocation of the pressures and prejudices that drive women to extreme deeds and the friendship that bolsters them in the aftermath.")

#Posts seeds

Post.create(page:3, user_id:2, book_title:"The Farm",quote:"this is a good scene")
Post.create(page:45, user_id:3, book_title:"Love, Lists, and Fancy Ships",quote:"wow wth happened here")
Post.create(page:89, user_id:1, book_title:"Out",quote:"he did what??????")
Post.create(page:2, user_id:1, book_title:"Getting Clean With Stevie Green",quote:"SHE DID WHAT???????????")
Post.create(page:100, user_id:2, book_title:"Amen Maxine",quote:"this scene goes really well with a taylor swift song")
Post.create(page:23, user_id:3, book_title:"Permanent Record",quote:"he did what??????")
Post.create(page:234, user_id:3, book_title:"Love, Lists, and Fancy Ships",quote:"he did what??????")
Post.create(page:55, user_id:2, book_title:"Amen Maxine",quote:"he did what??????")
Post.create(page:56, user_id:1, book_title:"Out",quote:"he did what??????")
Post.create(page:89, user_id:1, book_title:"Getting Clean With Stevie Green",quote:"he did what??????")
Post.create(page:17, user_id:2, book_title:"Permanent Record",quote:"he did what??????")


#User_books seed

UserBook.create(user_id:1,book_id:1)
UserBook.create(user_id:1,book_id:2)
UserBook.create(user_id:1,book_id:3)
UserBook.create(user_id:1,book_id:4)
UserBook.create(user_id:1,book_id:5)
UserBook.create(user_id:1,book_id:6)
UserBook.create(user_id:1,book_id:7)
UserBook.create(user_id:1,book_id:8)
UserBook.create(user_id:1,book_id:9)
UserBook.create(user_id:1,book_id:10)
UserBook.create(user_id:1,book_id:11)
UserBook.create(user_id:2,book_id:1)
UserBook.create(user_id:2,book_id:2)
UserBook.create(user_id:2,book_id:3)
UserBook.create(user_id:2,book_id:4)
UserBook.create(user_id:2,book_id:5)
UserBook.create(user_id:2,book_id:6)
UserBook.create(user_id:2,book_id:7)
UserBook.create(user_id:2,book_id:8)
UserBook.create(user_id:2,book_id:9)
UserBook.create(user_id:2,book_id:10)
UserBook.create(user_id:2,book_id:11)
UserBook.create(user_id:3,book_id:1)
UserBook.create(user_id:3,book_id:2)
UserBook.create(user_id:3,book_id:3)
UserBook.create(user_id:3,book_id:4)
UserBook.create(user_id:3,book_id:5)
UserBook.create(user_id:3,book_id:6)
UserBook.create(user_id:3,book_id:7)
UserBook.create(user_id:3,book_id:8)
UserBook.create(user_id:3,book_id:9)
UserBook.create(user_id:3,book_id:10)
UserBook.create(user_id:3,book_id:11)



puts "Seeding done!"







