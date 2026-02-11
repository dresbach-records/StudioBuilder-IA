
import React from 'react';

const LockIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <span className={`material-icons-round ${className}`}>lock</span>
);

export default LockIcon;
