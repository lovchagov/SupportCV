const langRU = {
    'lang': 'ru',
    'header': ['Максим Ловчагов', 'Инженер технической поддержки'],
    'education': ["Образование", 'Дальневосточный государственный универститет путей сообщения', 'Инженер связи', 'Сентябрь 2013 - Май 2018', 'Front-end разработчик', 'Май 2022 - По настоящее время', 'Stage #0 Сертификат'],
    'language': ['Язык', 'Английский', 'Уровень Intermediate (Работал инженером технической поддержки и общался с сотрудниками отелей и вендоров разных стран. Общение приемущественно по почте, но иногда и по телефону', 'Русский', 'Родной'],
    'skills': ['Навыки', 'Базовые навыки', 'Работа с сетью', 'Коммутаторы: Работа в CLI различных производителей (Cisco, Huawei, Brocade etc), в основном L2 - Диагностика и базовая конфигурация', 'Контроллеры: Aruba, Ruckus - Диагностика и базовая конфигурация', 'Мониторинг: Grafana, Solarwinds', 'SIP: VOIP-шлюзы различных производиетелей и настройка SIP-телефонов', 'Также есть опыт работы в веб-интерфейсках различных производителей так устройств как:  ADSL-модемы, ONTS, OLTs, беспроводные маршрутизаторы, точки доступа и прочее сетевое оборудование'],
    'work': ['Опыт работы', 'Ростелеком', 'Инженер технической поддержки первой категории (2ая линия) (B2C)', 'Декабрь 2018 - Сентябрь 2020', 'Диагностика и решение проблем с сетью, телевидением, SIP-телефонией. Мониторинг сети. Создание и эскалация массовых инцидентов.  a также взаимодействие со смежными подразделениями для устранения инцидентов.', 'Инженер технической поддержки (B2B)', 'Октябрь 2020 - Сентябрь 2021', 'Диагностика и решение проблем с сетью, телевидением, ПК пользователей. Взаимодействие с отелями и производетелями оборудования со всего мира. Взаимодействие с сотрудниками других отделов для решения инцидентов. Часть обязанностей системного администратора.', 'Газпром-нефть ИТО', 'Ведущий специалист отдела мониторинга инфраструктуры', 'Октябрь 2021 - Октябрь 2022', 'Координация специалистов технической поддержки в рамках бизнес-критичных систем. Мониторинг сетевого и серверного обрудования в рамках бизнес-критичных систем. Создание и эскалация массовых инцидентов. Взаимодействие с сотрудниками других отделов для решения инцидентов.']
}


const langEN = {
    'lang': 'en',
    'header': ['Maxim Lovchagov', 'Technical Support Engineer'],
    'education': ["Education", 'Far East State Transportation University', 'Telecommunications engineer', 'September 2013 - May 2018', 'Front-end developer', 'May 2022 - Current time', 'Stage #0 Certificate'],
    'language': ['Language', 'English', 'Intermediate (I worked as Technical Support Engeener and communicated with staff from different countries by e-mail and phone calls)', 'Russian', 'Native'],
    'skills': ['Skills', 'Basic skills', 'Network', 'Switches: CLI of diffrent vendors (Cisco, Huawei, Brocade etc), mainly L2 - Basic Configuration and Diagnosing', 'Controllers: Aruba, Ruckus - Basic Configuration and Diagnosing', 'Monitoring: Grafana, Solarwinds', 'SIP: VOIP-Gateways of diffrent vendors and SIP-telephones', 'Also have experience with WEB-Interface of diffrent ADSL-modems, ONTS, OLTs, wireless routers, access points and another network staff'],
    'work': ['Experience', 'Rostelecom', 'First category technical support engineer (2nd line) (B2C)', 'December 2018 - September 2020', 'Troubleshooting and resolving issues with network, TV-systems, SIP. Monitoring network. Creation and escalation of mass incidents. Communicating with another departments for fast resolve incidents.', 'Technical support engineer (B2B)', 'October 2020 - September 2021', 'Troubleshooting and resolving issues with network, TV-systems, users\'s PCs. Communicate with hotels and vendors of diffrent countries. Communicating with another departments for fast resolve. Responsibilities of the system administrator.', 'Gazprom-Neft ITO', 'Leading Specialist of Infrastructure Monitoring Department', 'October 2021 - October 2022', 'Coordination of technical support services within business-critical services. Monitoring network and servers within business-critical services. Creation and escalation of mass incidents. Communicating with another departments for fast resolve incidents.']
}


const header = document.querySelector('.header');
const headerContacts = document.querySelectorAll('.header__contacts > a');
const headerName = document.querySelector('.header__name');
const headerSubName = document.querySelector('.header__subname');
const educationHeader = document.querySelector('.education__header');
const educationCompany = document.querySelector('.item__company__name');
const educationJobTitle = document.querySelectorAll('.item__jobtitle');
const educationDate = document.querySelectorAll('.item__dates');
const educationCert = document.querySelector('.item__cert');
const languageHeader = document.querySelector('.language__header');
const languageEnglish = document.querySelector('#language__english');
const languageEnglishDescribe = document.querySelector('.language__describe__english');
const languageRussian = document.querySelector('#language__russian');
const languageRussianDescribe = document.querySelector('.language__describe__russian');
const skillsHeader = document.querySelector('.skills__header');
const basicSkills = document.querySelector('#basic__skills');
const networkSkills = document.querySelector('#network__skills');
const networkSkillsItems = document.querySelectorAll('.network__skills__item');
const workTitle = document.querySelector('.work__title');
const workCompany = document.querySelectorAll('.item__company');
const workDescribe = document.querySelectorAll('.item__describe');
const mainBlock = document.querySelector('.main');
const line = document.querySelector('.line')

let lang = langEN;

const language = document.querySelector('.pill1');
function languageChange() {
    if (language.checked)
        lang = langEN;
    else
        lang = langRU;
    setTimeout(languageChange, 1000);
}
languageChange();

const theme = document.querySelector('.pill2');


function themeChange() {
    if (theme.checked) {
        header.style.backgroundColor = 'black';
        header.style.color = 'white';
        headerContacts.forEach(element => {
            element.style.color = 'white';
        });
        mainBlock.style.backgroundColor = '#1A241F';
        mainBlock.style.color = 'white';
        educationHeader.style.color = '#30565A';
        languageHeader.style.color = '#30565A';
        skillsHeader.style.color = '#30565A';
        workTitle.style.color = '#30565A';
        line.style.backgroundcolor = '#30565A';
    }
    else {
        header.style.backgroundColor = '#DDDDDD';
        header.style.color = '#30565A';
        headerContacts.forEach(element => {
            element.style.color = '#30565A';
        });
        mainBlock.style.backgroundColor = 'white';
        mainBlock.style.color = '#30565A';

        educationHeader.style.backgroundColor = '#DDDDDD';
        languageHeader.style.backgroundColor = '#DDDDDD';
        skillsHeader.style.backgroundColor = '#DDDDDD';
        workTitle.style.backgroundColor = '#DDDDDD';
        line.style.backgroundColor = '#DDDDDD';
    };
    setTimeout(themeChange, 1000);
}
themeChange();


function languageChangeCont() {
    headerName.textContent = lang.header[0];
    headerSubName.textContent = lang.header[1];
    educationHeader.textContent = lang.education[0];
    educationCompany.textContent = lang.education[1];
    educationJobTitle[0].textContent = lang.education[2];
    educationDate[0].textContent = lang.education[3];
    educationJobTitle[1].textContent = lang.education[4];
    educationDate[1].textContent = lang.education[5];
    educationCert.textContent = lang.education[6];
    languageHeader.textContent = lang.language[0];
    languageEnglish.textContent = lang.language[1];
    languageEnglishDescribe.textContent = lang.language[2];
    languageRussian.textContent = lang.language[3];
    languageRussianDescribe.textContent = lang.language[4];
    skillsHeader.textContent = lang.skills[0];
    basicSkills.textContent = lang.skills[1];
    networkSkills.textContent = lang.skills[2];
    networkSkillsItems[0].textContent = lang.skills[3];
    networkSkillsItems[1].textContent = lang.skills[4];
    networkSkillsItems[2].textContent = lang.skills[5];
    networkSkillsItems[3].textContent = lang.skills[6];
    networkSkillsItems[4].textContent = lang.skills[7];
    workTitle.textContent = lang.work[0];
    workCompany[3].textContent = lang.work[1];
    educationJobTitle[2].textContent = lang.work[2];
    educationDate[2].textContent = lang.work[3];
    workDescribe[0].textContent = lang.work[4];
    educationJobTitle[3].textContent = lang.work[5];
    educationDate[3].textContent = lang.work[6];
    workDescribe[1].textContent = lang.work[7];
    workCompany[5].textContent = lang.work[8];
    educationJobTitle[4].textContent = lang.work[9];
    educationDate[4].textContent = lang.work[10];
    workDescribe[2].textContent = lang.work[11];
    setTimeout(languageChangeCont, 1000);
}
languageChangeCont()





