    const Banner = require('discord.js-banner')
    const banner =  new  Banner(process.env.DISCORD_TOKEN);
	const member = message.member;
    const userBanner=await banner.get(member.user.id,{ size : 2048 }) // return user And banner
        if (!userBanner.success)
    		    console.log(userBanner.error);
    	message.send(`user banner : ${userBanner.banner}`) 

ٍ**Example**

	if (message.content('!mybanner'))
	{
		const { member } = message;
	    const userBanner = await banner.get(member.user.id,)
	      if (!userBanner.success)
	    	 message.send(userBanner.error);
		  message.send(userBanner.banner) 
	  }