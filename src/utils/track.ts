import mixpanel from "mixpanel-browser";
export const Events = {
  Home: "HomePage",
  Blog: "BlogPage",
  Project: "ProjectPage",
  Contact: "ContactPage",
  SingleProject: "ProjectCardClick",
  SocialOpen: "OpenedSocialLink",
  WorkPageOpen:"OpenedASkillPage"
};

async function TrackAction(event: string, extra?: string) {
  mixpanel.track(
    event,
    {
      extra: extra,
    },
    { send_immediately: true },
    (re) => {
      console.log(re);
    }
  );
}
export default TrackAction;
