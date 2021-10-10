const settings = {
  notification: {
    follow: true,
    alerts: true,
    unfollow: false,
  },
  color: {
    theme: "dark",
  },
};

const { notifications: { follow = false } = {} } = settings;
