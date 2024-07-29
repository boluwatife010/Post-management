import {userModel }from '../model/usermodel';
import jwt from 'jsonwebtoken';
//import bcrypt from 'bcrypt';
import bcrypt from 'bcryptjs';
import { generateAuthToken } from '../middleware/auth';

import { IUser, loginRequestBody, updateRequestBody } from '../interface/user';

//Create User
export const createUser =async (body: IUser) => {
    const {username, email, password, profilePicture} = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) {
        throw new Error ("Could not hash password.");
    }
    const userExists = await userModel.findOne({ email});
    if (userExists) {
        throw new Error('The email is already in use');
    }
    const newUser = await  userModel.create({ username, email, password: hashedPassword, profilePicture });
    const token = generateAuthToken(newUser._id.toString());
    if (!newUser) {
        throw new Error('No user was created.');
    }
    await newUser.save();
    return {newUser, token};
}
export const loginUser = async(body: loginRequestBody): Promise<any> => {
    const {email, password} = body
    const login = await userModel.findOne({email});
    if (!login) {
        throw new Error ('User not found.')
    }
    const comparison = await bcrypt.compare(password, login.password);
    if (!comparison) {
        throw new Error ('Invalid password');
    }
    const token = generateAuthToken(login._id.toString());
    return {login, token};
}
export const userUpdate = async (body:updateRequestBody, id: string) => {
    const {email, password, username} = body;
    const update = await userModel.findById(id);
    if (!update) {
        throw new Error ('User details not found.');
    }
    if (email) {
        update.email = email;
    }
    if (password) {
        update.password = password;
    }
    if (username) {
        update.username = username;
    }
     await update.save();
     return update;
}
export const getUser = async (id: string) => {
    const user = await userModel.findById(id);
    if (!user) {
        throw new Error ('User not found.')
    }
    return user;
}
export const getAllUsers = async () => {
    const all = await userModel.find();
    if (!all) {
        throw new Error ('Could not get all users.')
    }
    return all;
}
export const deleteUser = async (id: string) => {
    const deleting = await userModel.findByIdAndDelete(id);
    if (!deleting) {
        throw new Error ('The id provided above is not valid.')
    }
    return deleting;
}