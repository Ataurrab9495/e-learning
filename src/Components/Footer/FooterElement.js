import styled from 'styled-components'
import {FaReact,FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram,BsTwitter,BsYoutube,BsLinkedin} from 'react-icons/bs'
import {MdLocationOn,MdEmail,MdCall} from 'react-icons/md'

export const FooterSection = styled.div`
    background-color: #000;
    
`

export const FooterContainer = styled.div`
    --bs-gutter-x: 200px;
    padding-left:calc(var(--bs-gutter-x)/2);    
    padding-right:calc(var(--bs-gutter-x)/2);
    margin-left:auto;
    margin-right:auto;
    padding-top:3rem;    
    padding-bottom:3rem;    
`

export const IconSection = styled(FaReact)`
    font-size:7rem;
    color:white;
`
export const SocialMedia = styled.div`
    display:flex;
`

export const Location = styled(MdLocationOn)`
color:white;
    font-size:1.2rem;

`

export const Email = styled(MdEmail)`
color:white;
    font-size:1.2rem;

`
export const Call = styled(MdCall)`
color:white;
    font-size:1.2rem;

`

export const Facebook = styled(FaFacebookSquare)`
    color:white;
    font-size:1.2rem;
    cursor:pointer;
    transition: .5s ease-in-out;

    &:hover{
        color:gray;
        transform:scale(1.2);
        transition: .5s ease-in-out;
    }
`
export const Instagram = styled(BsInstagram)`
    color:white;
    font-size:1.2rem;
    cursor:pointer;

    &:hover{
        color:gray;
        transform:scale(1.2)
    }
`
export const Twitter = styled(BsTwitter)`
    color:white;
    font-size:1.2rem;
    cursor:pointer;

    &:hover{
        color:gray;
        transform:scale(1.2)
    }
`
export const Youtube = styled(BsYoutube)`
    color:white;
    font-size:1.2rem;
    cursor:pointer;

    &:hover{
        color:gray;
        transform:scale(1.2)
    }
`
export const Linkedin = styled(BsLinkedin)`
    color:white;
    font-size:1.2rem;
    cursor:pointer;

    &:hover{
        color:gray;
        transform:scale(1.2)
    }
`

export const Border = styled.div`
width: 150px;
height: 4px;
background: linear-gradient(to right, #FA4B37, #DF2771);
margin: 2px;

`