const conn = require('../connect');
const { DataTypes } = require('sequelize');
const MemberModel = conn.define('member', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    packageId: {
        type: DataTypes.BIGINT,
    },
    name: {
        type: DataTypes.STRING(255)
    },
    phone: {
        type: DataTypes.STRING(255)
    },
    pass: {
        type: DataTypes.STRING(255)
    },
})

//**หากสร้างตารางใน PostgreSQL เสร็จแล้วให้ลบบรรทัดนี้ออก >> ไม่งั้นอันตราย ข้อมูลอาจหายหมดได้!!**
//MemberModel.sync({alter: true});

module.exports = MemberModel;