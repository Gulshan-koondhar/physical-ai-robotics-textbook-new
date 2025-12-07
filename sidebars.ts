import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manual sidebar structure for the Physical AI & Humanoid Robotics textbook
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1 - The Robotic Nervous System (ROS 2)',
      items: [
        'modules/module1/1.1-introduction-physical-ai-robotics',
        'modules/module1/1.2-ros2-from-zero',
        'modules/module1/1.3-urdf-xacro-mastery',
        'modules/module1/1.4-ros2-components'
      ],
    },
    {
      type: 'category',
      label: 'Module 2 - The Digital Twin (Simulation)',
      items: [
        'modules/module2/2.1-gazebo-setup-sensor-plugins',
        'modules/module2/2.2-simulating-humanoid',
        'modules/module2/2.3-unity-rendering-ros-connector'
      ],
    },
    {
      type: 'category',
      label: 'Module 3 - The AI-Robot Brain (NVIDIA Isaac Platform)',
      items: [
        'modules/module3/3.1-isaac-sim-installation',
        'modules/module3/3.2-isaac-ros-gems',
        'modules/module3/3.3-nav2-moveit2',
        'modules/module3/3.4-synthetic-data-replicator'
      ],
    },
    {
      type: 'category',
      label: 'Module 4 - Vision-Language-Action (VLA) & Conversational Robotics',
      items: [
        'modules/module4/4.1-whisper-llm-ros-planner',
        'modules/module4/4.2-open-vocabulary-detection-grasping',
        'modules/module4/4.3-end-to-end-voice-controlled-humanoid',
        'modules/module4/4.4-jetson-orin-deployment'
      ],
    },
    'capstone',
    'hardware-guide',
    {
      type: 'category',
      label: 'Appendix',
      items: [
        'appendix/troubleshooting',
        'appendix/code-repo'
      ],
    },
  ],
};

export default sidebars;
