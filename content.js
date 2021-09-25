export const aboutText = (<>
  <p>Formula Bun is a regular vanilla, hard speed srb2kart server without any gameplay modifications. There isn’t even KartMP.</p>
  <p>However, each evening at 9pm CEST a random event starts, for example elimination or friendmod. Don’t like it? Undo it with `vote noevent`.</p>
  </>)

export const detailsText = (<>
  <p>
  This server is hosted in Germany using Contabo and is maintained by Fl_GUI.
  I started this server in May 2021 as a private one for a small group of friends who all met through srb2kart.
  A couple months later I felt that it should be public.
  The very first day that the server was public was a great success, and reminded some of us of the old kkd days, but with more maps.
  This vanilla experience has become rare, so formulabun aims to fill this gap.
  </p>
  <p>
  Gameplay changes using mods can still be fun however.
  That's why I added the random event that happen every evening at 9pm CEST.
  These events include: acrobatics, elimination, friendmod, combiring, encore and battle.
  One of these is choosen with weithed random chance.
  If an event is not wanted you can enter <span style={{fontStyle:'italic'}}>vote noevent</span> in the console to start a vote to stop the event and return to vanilla race.
  </p>

  <p>Changes made to addons:
  <ul>
  <li>Friendmod: removed the UI that shows when friendmod is not enabled</li>
  <li>Caterkiller: Changed the easter egg to behave differently for a specific person</li>
  </ul>
  These changes follow the reusable rules or have been made after permission from the respective authors.
  </p>

  <p>
  Much of the code that runs or supports formulabun is open source and available on github.
  Check out the game itself at <a href="https://github.com/STJr/Kart-Public">github.com/STJr/Kart-Public</a> and formulabun specific code at <a href="https://github.com/formulabun">github.com/formulabun</a>.
  There also is a discord bot for formulabun, contact Fl_GUI#5136 on discord for more information.
  </p>
  </>);


export const rulesText = (<>
  <p>When joining formulabun you must follow these rules:
  <ol>
  <li>Respect other players and don't be annoying</li>
  <li>Meme cuts are okay but checkpoint abuse isn't</li>
  <li>If you see an active mod (with an @ symbol before their name),
  listen to them because something is going on.</li>
  <li>No hacking or griefing</li>
  </ol>
  When you do not follow these rules a moderator will be called to deal with you.
  The mod will first ask you to behave, will kick you if you don't and will ban you if you persist.
  Don't let it go that far. We're all doing this because we want a fun time playing a game we love.
  </p>
  <p>
  An active mod acts in name of formulabun and me personally.
  If you think a mod treated you unfairly please contact Fl_GUI#5136.
  A mod follows the guidelines found <a href={`http://${process.env.NEXT_PUBLIC_KARTSERVER_IP}/files/modguide.pdf`}>here</a>.
  <br/>
  An inactive mod is their own person. They can say what they want but their views do not have to represent formulabun.
  </p>
  </>)

export const joinText = (<>
  <p>
    Can't find formulabun in the server browser?
    <p> On the main menu, open your console with the ` key and type in: <span style={{fontStyle:'italic'}}>connect formulabun.club</span></p>
    </p>
  <p>
    Is this too slow?
    <p>Open or create the file <span style={{fontStyle:'italic'}}>kartexec.cfg</span> in the directory where you installed srb2kart.
    In this file add the line:</p>
    <p style={{fontStyle:'italic'}}>alias fbun "connect formulabun"</p>
    <p> Now instead of typing
    <span style={{fontStyle:'italic'}}> connect formulabun.club </span>
    you can type
    <span style={{fontStyle:'italic'}}> fbun </span>
    in your console in order to join.
    </p>
  </p>
  <p>
    Do you have the moe mansion build?
    <p> Click <a href={`srb2kart://ip/${process.env.NEXT_PUBLIC_KARTSERVER_IP}`}> here</a>!</p>
  </p>
  </>)
