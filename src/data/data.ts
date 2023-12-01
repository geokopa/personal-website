import { Skill, Project, NavItem } from '../types/types';
import { SkillLogos } from '../data/images';


export const SkillsDataSet: readonly Skill[] = [
    {
        id: 1,
        name: 'C#',
        icon: SkillLogos.CSharp,
    },
    {
        id: 2,
        name: '.NET CORE',
        icon: SkillLogos.NetCore,
    },
    {
        id: 3,
        name: 'ASP.NET CORE',
        icon: SkillLogos.AspNet,
    },
    {
        id: 4,
        name: 'SQL SERVER',
        icon: SkillLogos.Sql,
    },
    
    {
        id: 5,
        name: 'Azure',
        icon: SkillLogos.Azure,
    },
    {
        id: 6,
        name: 'TypeScript',
        icon: SkillLogos.Ts,
    },
    {
        id: 7,
        name: 'JavaScript',
        icon: SkillLogos.Js,
    },
    {
        id: 8,
        name: 'React JS',
        icon: SkillLogos.React,
    },
] as const;


export const ProjectsDataSet: readonly Project[] = [
    {
        id: 1,
        name: 'GenteDrive',
        imageUri: 'https://via.placeholder.com/150',
        demoUri: 'https://via.placeholder.com/150',
        sourceUri: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Project 2',
        imageUri: 'https://via.placeholder.com/150',
        demoUri: 'https://via.placeholder.com/150',
        sourceUri: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Project 3',
        imageUri: 'https://via.placeholder.com/150',
        demoUri: 'https://via.placeholder.com/150',
        sourceUri: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        name: 'Congree Style Guide Manager',
        imageUri: 'https://www.congree.com/fileadmin/user_upload/style_guide_manager_2.png',
        demoUri: 'https://www.congree.com/en/tools',
        sourceUri: 'https://via.placeholder.com/150',
    },
    {
        id: 5,
        name: 'Congree Authoring Tool',
        imageUri: 'https://www.congree.com/fileadmin/_processed_/1/6/csm_standard_756a959bb0.png',
        demoUri: 'https://www.congree.com/en/tools',
        sourceUri: 'https://via.placeholder.com/150',
    },
    {
        id: 6,
        name: 'Ministry of Finance of Georgia Website',
        imageUri: 'https://via.placeholder.com/150',
        demoUri: 'https://www.mof.ge',
        sourceUri: 'https://via.placeholder.com/150',
    },
] as const;


export const NavigationItems: readonly NavItem[] = [
    {
        id: 1,
        name: 'Home',
        uri: 'home',
    },
    {
        id: 2,
        name: 'About',
        uri: 'about',
    },
    {
        id: 3,
        name: 'Skills',
        uri: 'skills',
    },
    {
        id: 4,
        name: 'Projects',
        uri: 'projects',
    },
    {
        id: 5,
        name: 'Testimonials',
        uri: 'testimonial',
    },
    {
        id: 6,
        name: 'Contact',
        uri: 'contact',
    }
] as const;