import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

/*
 * @description:    Authentifié l'utilsateur et obtenir Token
 * @route:          POST api/users/login
 * @access:         Public
*/
const authUser = asyncHandler(async (request, response) => {
    const { email, password } = request.body
  
    const user = await User.findOne({ email })
  
    if (user && (await user.matchPassword(password))) {
        response.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
    response.status(401)
      throw new Error('Email ou Mot de passe invalide.')
    }
  })


 
/*
 * @description:    Obtenir le profil Utilisatateur
 * @route:          GET api/users/profile
 * @access:         Private
*/
const getUserProfile = asyncHandler( async (request, response) => {
    const user = await User.findById(request.user._id)

    if (user) {
        response.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        response.status(404)
        throw new Error('Utilisateur non trouvé...')
    }
}) 

export { authUser, getUserProfile }