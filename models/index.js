const Category=require("./Category")
const Product=require("./Product")
const ProductTag=require("./ProductTag")
const Tag=require("./Tag")
// Products belongsTo Category
Product.belongsTo(Category,{
    foreignKey:"category_id"
})
// Categories have many Products
Category.hasMany(Product,{
    foreignKey:"category_id"
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
    through:ProductTag,
    foreignKey:"product_id"
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
    through:ProductTag,
    foreignKey:"tag_id"
})
// Reader.hasOne(LibraryCard, {
//     foreignKey: 'reader_id',
//     onDelete: 'CASCADE'
//   });

module.exports={Category,Product,ProductTag,Tag}

