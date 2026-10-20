// json ~ data
import jsonLabels from "../data/label.json";
import jsonMeta from "../data/meta-profile.json";
import jsonSocials from "../data/socials.json";
import jsonTestmonies from "../data/testimonies.json";
// json ~ config
import cfgBusiness from "../config/business.json";
import cfgSite from "../config/site.json";
// constants ~ data
export const dataUrls = jsonLabels.labels.default["list-links"];
export const dataMetaProfile = jsonMeta["data-profile"];
export const dataSocials = jsonSocials.socials;
export const dataTestmonies = jsonTestmonies.persons;
// constants ~ config
export const configBusiness = cfgBusiness.business;
export const configSiteToggle = cfgSite["components-toggle"];
export const configSiteHTTP = cfgSite.http;
export const configSiteServef = cfgSite.server;
