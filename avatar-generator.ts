import { Avatar, AvatarType, BackgroundType } from "@continuum-ai/avatars";
import * as fs from "fs"

const avatar = await Avatar.assemble(Math.random().toString(), AvatarType.Robots, BackgroundType.Abstract);

const buffer = await avatar.png().toBuffer()

fs.writeFileSync("./avatar-robots-2.png", buffer)