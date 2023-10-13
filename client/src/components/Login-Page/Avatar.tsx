"use client"
import { AvatarProps } from '@/types'
import Image from 'next/image'
import React from 'react'

function Avatar({avatarId,setAvatarId}:AvatarProps) {
  return (
    <div
      onClick={() => setAvatarId((Math.random() * 20).toFixed())}
      className="avatar cursor-pointer mx-auto mb-5 tooltip"
      data-tip="Click to regenerate avatar.">
      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <Image
          src={`https://robohash.org/${avatarId}.png`}
          width={256}
          height={256}
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Avatar