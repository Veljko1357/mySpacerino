import{_ as c}from"./AppLayout-377fed63.js";import p from"./DeleteUserForm-b9148a70.js";import l from"./LogoutOtherBrowserSessionsForm-fccd19de.js";import{S as s}from"./SectionBorder-b9184cc3.js";import f from"./TwoFactorAuthenticationForm-803df603.js";import u from"./UpdatePasswordForm-ce3b226a.js";import _ from"./UpdateProfileInformationForm-c40125e8.js";import{c as d,w as n,o,a as i,e as r,b as t,f as a,F as h}from"./app-ee76bfaf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-cb947759.js";import"./SectionTitle-d8e0e337.js";import"./DangerButton-55e1b136.js";import"./TextInput-53a11692.js";import"./SecondaryButton-627417ee.js";import"./ActionMessage-1f5ad1cf.js";import"./PrimaryButton-66354f86.js";import"./InputLabel-66947095.js";import"./FormSection-b8dbb9a8.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};