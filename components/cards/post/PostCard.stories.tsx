import { ComponentMeta, ComponentStory } from '@storybook/react'
import { IPostCard } from '../../../lib/types/PostCard';
import PostCard from './PostCard'
import { mockPostCardProps } from './PostCard.mocks';


export default {
    title: "cards/PostCard",
    component: PostCard,
    argTypes:{}
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args)=>(
    <PostCard {...args} />
)

export const Base = Template.bind({})

Base.args = {
    ...mockPostCardProps.base,

} as IPostCard