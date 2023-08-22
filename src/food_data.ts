import { Food } from "./app/shared/models/food";
import { Tag } from "./app/shared/models/tag";

export const sample_foods: Food[] = [
    {id:'1',name:'Finger  Millet Roti',imagePath:'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTgzNDA5NjUzNTQ2MjMwODIy/ragi-chapati-finger-millet-roti-recipe.webp',description: ' Finger millet roti, a gluten-free flatbread made from finger millet flour, is rich in nutrients and is often enjoyed with diverse accompaniments for a wholesome and flavorful meal.',favorite:true,stars:3,ingredients:['Finger millet flour-150g','Sorghum flour-100g', 'Water(As necessary)', 'Salt'],methods:['Sieve the flour','Combine everything and mix into a soft dough and leave for ½ hour','Heat the clay frying pan and flatten the dough thinly','Sear both sides slightly on the frying pan and remove from the fire'],tags: ['Pregnancy','Obesity','Dengue']
    ,calorieAmount:'500 calories'},
     
    {id:'2',name:'Finger Millet Rolls',imagePath:'https://scontent.fcmb8-1.fna.fbcdn.net/v/t1.6435-9/106453102_229512072103630_1849202586740054677_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=512d91&_nc_ohc=F1HhecxTjykAX8Krrjq&_nc_ht=scontent.fcmb8-1.fna&oh=00_AfD2NDQGybqCx3V8OmG7wNNPrQiLXQiWyP0Cf_2M_e5t3Q&oe=64FB3AE3',description:'Finger millet pittu is a traditional Sri Lankan  dish where finger millet flour is steamed with grated coconut, resulting in a textured and nutritious delicacy enjoyed with various curries and chutneys.',favorite:false,stars:3,ingredients:['Kurakkan flour-250g','Scraped coconut-100g','Sugar-1 tbs','Water(As necessary)','Salt'],methods:['Combine and mix everything together,Sprinkling some water to form crumbs','Pack the crumbs sternly into a cylindrical steamer and steam until cooked','Then cut the contents into equal portions and serve'],tags: ['Pregnancy','Obesity'],calorieAmount:'600 calories'},
      
    {id:'3',name:'Vegetable Ghee Rice',imagePath:'https://www.ticklingpalates.com/wp-content/uploads/2022/03/vegetable-ghee-rice.jpg',description:'Vegetable ghee rice is a aromatic  dish where basmati rice is cooked with spices, vegetables, and a blend of ghee and oil, offering a delightful and aromatic meal. Perfect as a main course or side dish with curries.',favorite:true,stars:3,ingredients:['Samba Rice-500g', 'Stock-4 Cups', 'Vegetable Ghee-2 tbs', 'Panda leaf-1', 'Sliced red onion-30g', 'Cinnamon-1”', 'Pepper seed-5 nos', 'Cardamom-2 pods', 'Cloves-2 pods', 'Curry Leaves-1 tbs-'],methods:['Wash rice and leave it to drain', 'Warm vegetable ghee and add sliced red onion, curry leaves to fry', 'Add rice and fry for about two minutes', 'Add salt to meat stock, mis and thereafter combine everything with rice', 'Meanwhile gather panda leaf, cinnamon,cloves and cardamom to a bundle in thin clothe and leave with rice and close the lid tightly', 'When rice is sufficiently boiled, remove the bundle', 'Empty the rice on a platter , garnish and serve'],tags: ['Pregnancy'],calorieAmount:'700 calories'},
      
    {id:'4',name:'Sour Clay Pot Fish',imagePath:'https://www.islandsmile.org/wp-content/uploads/2022/04/IMG_5965-1152x1536.webp',description:'Sour clay pot fish is a Southeast Asian delicacy where fish is cooked with tamarind, herbs, and spices in a clay pot, resulting in tender and flavorful bites that capture the essence of traditional cooking.',favorite:false,stars:3,ingredients:['Fish-200g', 'Sliced Ginger-1/4 tbs', 'Ground gamboge-15g', 'Cinnamon-1/4”', 'Green chillie-2 pods', 'Panda leaves-1/4”', 'Pepper powder-2 tbs', 'Water-1 Cup', 'Shredded curry leaves-1 tbs', 'Sliced garlic-1/2 tbs', 'Salt'],methods:['Wash and cut the fish', 'Grind all ingredients except fish', 'Add the mixture to the fish', 'Add water and cook in low fire until the water evaporates'],tags: ['Diabetics'],calorieAmount:'650 calories'},
            
    {id:'5',name:'Salt Crushed Prawn Dish',imagePath:'https://salu-salo.com/wp-content/uploads/2017/06/Salted-Prawns-2.jpg.webp',description:'Salt-crushed prawn dish features succulent prawns coated in a mixture of crushed salt and aromatic spices, creating a flavorful crust when cooked—a savory delicacy that tantalizes the taste buds with its delightful texture and taste. ',favorite:false,stars:3,ingredients:['Normal size prawns-400g', 'Salt-15g', 'Barbecue sticks-8 nos'],methods:['Remove the heads of prawns and wash', 'And fix on the the barbecue bar', 'Mix with salt diluted in a little amount of water', 'Warm the grilled plate and spread the prawns', 'Barbecue for few minutes'],tags: ['Pregnancy','Cholesterol'],calorieAmount:'800 calories'},
            
    {id:'6',name:'Chicken Devil Curry',imagePath:'https://cookerybay.com/wp-content/uploads/2022/08/chicken-devil-1536x1062.jpg',description:'Chicken Devil Curry, a fiery dish from Sri Lanka, combines tender chicken pieces with a rich blend of spices, coconut milk, and tamarind, resulting in a bold and flavorful curry that offers a perfect balance of heat and depth of flavor. ',favorite:false,stars:3,ingredients:['Chicken-250g', 'Chopped garlic-1 tbs', 'Capsicum-40g', 'Chopped ginger-1/2 tbs', 'Big onions-40g', 'Turmeric-1/2 tbs', 'Tomato wedged-40g', 'Chillie pieces-1/2 tbs', 'Leeks-30g', 'Coconut oil-1 cup', 'Chopped onions-20g', 'Cinnamon-1/4”', 'Green chillie quarterly cut-4 pods', 'Panda leaf-1/4”', 'Shredded curry leaves-1 tbs', 'Black pepper pieces-1tbs', 'Salt'],methods:['Remove the bone and cut the chicken to small pieces', 'Mix with turmeric and salt and half boil in oil', 'Cross cut capsicum In to ¼” size and big onions to ¾” pieces and leeks ½” long', 'Place a pan and add oil to fry chopped onions, panda leaves, curry leaves and cinnamon until its brown', 'Add ginger, garlic, chilly pieces, chicken and salt and mix well', 'Then mis with big onion, leeks, green chilli and tomatoes and pepper and half boil in low fire'],tags: ['Pregnancy','Dengue'],calorieAmount:'900 calories'},

]

export const sample_tags:Tag[]=[
    {name:'Diabetics',count:1},
    {name:'Gastritis',count:0},
    {name:'High blood pressure',count:0},
    {name:'Cholesterol',count:1},
    {name:'Dengue',count:2},
    {name:'Obesity',count:2},
    {name:'Pregnancy',count:5}
]