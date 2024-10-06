const mongoose = require('mongoose');

const weddingSchema = mongoose.Schema(
    {
        category: {
            type: String,
            enum: ['SignUp', 'Venue','Photographer','Atelier','MakeUpArtist','Videographer','Bouquet','InvitationCards','HairStyler','Package','Cart','Gift'],
            //required: [true, "This filed is required"]
        },


        /////////signUp
        name: {
            type: String,
            //required:[true,"This filed is required"]
        },
        email: {
            type: String,
            //required:[true,"This filed is required"]
        },
        phone: {
            type: Number,
            //required:[true,"This filed is required"]
        },
        password: {
            type: String,
            //required:[true,"This filed is required"]
        },
        gender: {
            type: String,
            enum:['Male','Female'],
            //required:[true,"This filed is required"]
        },
        age: {
            type: Number,
            //required:[true,"This filed is required"]
        },


        ///////////venue additions
        location: {
            type: String,
            //required:[true,"This filed is required"]
        },
        price: {
            type: Number,
            default:0,
            //required:[true,"This filed is required"]
        },
        stars: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
            //required:[true,"This filed is required"]
        },
        capacity: {
            type: Number,
            //required:[true,"This filed is required"]
        },
        services: {
            type: String,
            //required:[true,"This filed is required"]
        },
        review: {
            type: String,
        },
        availability: {
            type: Date,
            //required:[true,"This filed is required"]
        },
        venueType: {
            type: String,
            enum: ['Beaches,Waterfront','Hotels,inns,resorts','Museums,Galleries','Parks,Gardens','Farms,Barns,Ranches',''],
            //required:[true,"This filed is required"]
        },
        venueDoor: {
            type: String,
            enum: ['Indoor','Outdoor'],
            //required:[true,"This filed is required"]
        },
        venueAmenities: {
            type: String,
            enum: ['Bar','Catering','CleanUp','Dance Floor','Dressing Room','WiFi','Lighting','Sound','Transportation'],
            //required:[true,"This filed is required"]
        },

        ///////others for rest
        image: {
            type: String,
            //required:[true,"This filed is required"]
        },
        description: {
            type: String,
            //required:[true,"This filed is required"]
        },
        colors: {
            type: String,
            //required:[true,"This filed is required"]
        },
        gift: {
            type: String,
            //required:[true,"This filed is required"]
        },
        flowers: {
            type: String,
            enum:['Rose','Daisy','Sunflower','Orchid','Carnation','Begonia','Lavender']
            //required:[true,"This filed is required"]
        },
        packageComponent: {
            type: String,
            //required:[true,"This filed is required"]
        },
        quantity: {
            type: Number,
            default:0,
            //required:[true,"This filed is required"]
        }
    }
)

const WeddingModel = mongoose.model("WeddingModel", weddingSchema);
module.exports = WeddingModel;