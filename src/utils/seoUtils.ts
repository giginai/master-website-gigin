
export const generateJobPageTitle = (type: 'for' | 'in', value: string) => {
  if (type === 'for') {
    return `${value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Jobs in India`;
  } else {
    return `Jobs in ${value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`;
  }
};

export const generateJobPageDescription = (type: 'for' | 'in', value: string) => {
  if (type === 'for') {
    const jobType = value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return `Find ${jobType} jobs across India. Browse verified job listings with trusted employers on Gigin's platform.`;
  } else {
    const location = value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return `Discover job opportunities in ${location}. Find your next career move with verified employers on Gigin.`;
  }
};

export const generateBlogCategoryTitle = (categoryName: string) => {
  return `${categoryName} - Gigin Blog`;
};

export const generateBlogCategoryDescription = (categoryName: string) => {
  return `Read the latest articles about ${categoryName.toLowerCase()} from Gigin's expert team. Stay updated with industry insights and best practices.`;
};

export const generateVerificationPageTitle = (verificationType: string) => {
  return `${verificationType} - Background Verification Services`;
};

export const generateVerificationPageDescription = (verificationType: string) => {
  return `Professional ${verificationType.toLowerCase()} services by Gigin. Ensure compliance and trust in your hiring process with our comprehensive verification solutions.`;
};

export const stripHtmlTags = (html: string): string => {
  return html.replace(/<[^>]*>/g, '').trim();
};

export const truncateText = (text: string, maxLength: number = 160): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
};
