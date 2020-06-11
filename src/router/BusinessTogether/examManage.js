// 考试管理
import Layout from '@/layout'
export default {
  path: '/exam-manage',
  // component: () => import('@/views/components/childRoutePage'),
  component: Layout,
  alwaysShow: true,
  name: 'examManage',
  meta: {
    title: '考试管理',
    noCache: true,
    icon: 'common'
  },
  children: [
    {
      path: 'question-info-maintenance',
      component: () => import('@/views/BusinessTogether/examManage/questionInfoMaintenance'),
      name: 'questionInfoMaintenance',
      meta: {
        title: '题目信息维护',
        noCache: true,
        icon: 'topicmaintain'
      }
    },
    {
      path: 'question-info-release',
      component: () => import('@/views/BusinessTogether/examManage/questionInfoRelease'),
      name: 'questionInfoRelease',
      meta: {
        title: '题目信息发布',
        noCache: true,
        icon: 'topicissue'
      }
    },
    {
      path: 'exam-paper-info-maintenance',
      component: () => import('@/views/BusinessTogether/examManage/examPaperInfoMaintenance'),
      name: 'examPaperInfoMaintenance',
      meta: {
        title: '试卷信息维护',
        noCache: true,
        icon: 'testmaintain'
      }
    },
    {
      path: 'exam-paper-info-release',
      component: () => import('@/views/BusinessTogether/examManage/examPaperInfoRelease'),
      name: 'examPaperInfoRelease',
      meta: {
        title: '试卷信息发布',
        noCache: true,
        icon: 'testissue'
      }
    },
    {
      path: 'exam-info-maintenance',
      component: () => import('@/views/BusinessTogether/examManage/examInfoMaintenance'),
      name: 'examInfoMaintenance',
      meta: {
        title: '考试信息维护',
        noCache: true,
        icon: 'exammaintain'
      }
    },
    {
      path: 'exam-info-release',
      component: () => import('@/views/BusinessTogether/examManage/examInfoRelease'),
      name: 'examInfoRelease',
      meta: {
        title: '考试信息发布',
        noCache: true,
        icon: 'examissue'
      }
    },
    {
      path: 'exam-test',
      component: () => import('@/views/BusinessTogether/examManage/examTest'),
      name: 'examTest',
      meta: {
        title: '考试',
        noCache: true,
        icon: 'exam'
      }
    },
    {
      path: 'exam-test-query',
      component: () => import('@/views/BusinessTogether/examManage/examTestQuery'),
      name: 'examTestQuery',
      meta: {
        title: '考试查询',
        noCache: true,
        icon: 'examquery'
      }
    },
    {
      path: 'error-topic-query',
      component: () => import('@/views/BusinessTogether/examManage/errorTopicQuery'),
      name: 'errorTopicQuery',
      meta: {
        title: '错误题目查询',
        noCache: true,
        icon: 'errorquery'
      }
    },
    {
      path: 'questionnaire-infor-maintenance',
      component: () => import('@/views/BusinessTogether/examManage/questionnaireInforMaintenance'),
      name: 'questionnaireInforMaintenance',
      meta: {
        title: '问卷信息维护',
        noCache: true,
        icon: 'psqmaintain'
      }
    },
    {
      path: 'questionnaire-infor-release',
      component: () => import('@/views/BusinessTogether/examManage/questionnaireInforRelease'),
      name: 'questionnaireInforRelease',
      meta: {
        title: '问卷信息发布',
        noCache: true,
        icon: 'psqissue'
      }
    },
    {
      path: 'questionnaire-survey',
      component: () => import('@/views/BusinessTogether/examManage/questionnaireSurvey'),
      name: 'questionnaireSurvey',
      meta: {
        title: '问卷调查',
        noCache: true,
        icon: 'psqsurvey'
      }
    }
  ]
}
